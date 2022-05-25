import axios from "axios";
// axios.defaults.baseURL = process.env.REACT_APP_API_HOST;

const signIn = async (email, password) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_HOST}/users/signin`,
      {
        email,
        password,
      }
    );

    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const signUp = async (email, password) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_HOST}/users/signup`,
      {
        email,
        password,
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const apiAuth = { signIn, signUp };
export default apiAuth;
