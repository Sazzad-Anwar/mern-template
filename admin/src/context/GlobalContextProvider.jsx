import { createContext, useContext, useReducer } from "react";
import AuthReducer from "./reducers/AuthReducer";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalContextProvider = ({ children }) => {
  let initialState = {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  };

  const [auth, authDispatch] = useReducer(AuthReducer, initialState);

  return (
    <GlobalContext.Provider value={{ auth, authDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
