import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("token");
    return token || null;
  });

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const signIn = async (email, password) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_HOST}/users/signin`,
        {
          email,
          password,
        }
      );
      const { token } = response.data;
      setToken(token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserContext.Provider
      value={{
        token,
        signIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
