import { createContext, useContext, useReducer } from "react";
import AuthReducer from "./reducers/AuthReducer";
import SideBarReducer from "./reducers/SideBar";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalContextProvider = ({ children }) => {
  let authState = {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  };

  let sideBarState = {
    isOpen: localStorage.getItem("sideBarIsOpen")
      ? Boolean(JSON.parse(localStorage.getItem("sideBarIsOpen")))
      : true,
  };

  const [auth, authDispatch] = useReducer(AuthReducer, authState);
  const [sideBar, sideBarToggleDispatch] = useReducer(
    SideBarReducer,
    sideBarState
  );

  return (
    <GlobalContext.Provider
      value={{ auth, authDispatch, sideBar, sideBarToggleDispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
