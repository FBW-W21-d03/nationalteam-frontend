import axios from "axios";
import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

const ImageBase64 = ({ data }) => (
  <>
    {data ? <img style={{ width: 400 }} alt="Avatar" src={data} /> : undefined}
  </>
);

const Profile = () => {
  const [newImage, setNewImage] = useState(null);
  const [profile, setProfile] = useState(null);
  const { user, token } = useUser();

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/users/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProfile(response.data?.user);
      } catch (err) {
        console.log(err);
      }
    };
    loadProfile();
  }, []);

  const handleFileChanged = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setNewImage(base64);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      `${process.env.REACT_APP_API_HOST}/users/image`,
      { image: newImage },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setProfile({ ...profile, image: newImage });
  };

  if (!user) {
    return (
      <div>
        <h1>You are not logged in!</h1>
        <Link to="/">Zum Login</Link>
      </div>
    );
  }
  return (
    <div>
      <h1>Profile</h1>
      <p>{profile?.email || ""}</p>
      <ImageBase64 data={profile?.image} />

      <form onSubmit={handleSubmit}>
        <input
          type="file"
          label="Image"
          name="myFile"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleFileChanged(e)}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};
export default Profile;
