import { useState, useEffect, createContext, useContext } from "react";
import jwtDecode from "jwt-decode";
import authApi from "../api/auth";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token || null);
  }, []);

  useEffect(() => {
    let timeoutHandle = 0;
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 < Date.now()) {
          setToken(null);
        } else {
          timeoutHandle = setTimeout(() => {
            setToken(null);
          }, decoded.exp * 1000 - Date.now());
        }
      } catch (err) {
        setToken(null);
      }
    }
    return () => clearTimeout(timeoutHandle);
  }, [token]);

  const signIn = async (email, password) => {
    try {
      const { token } = await authApi.signIn(email, password);
      setToken(token);
      localStorage.setItem("token", token);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  const signUp = async (email, password) => {
    try {
      await authApi.signUp(email, password);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  const signOut = () => {
    setToken(null);
    localStorage.setItem(null);
  };
  let user = null;
  try {
    user = jwtDecode(token);
  } catch (err) {}
  return (
    <UserContext.Provider value={{ token, user, signIn, signUp, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
