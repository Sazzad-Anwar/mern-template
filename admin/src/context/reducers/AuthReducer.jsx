import { LOGIN, LOGOUT, REGISTRATION } from "../constants/AuthConstants";
import jwt_decode from "jwt-decode";

const AuthReducer = (state = {}, action) => {
  let user;
  switch (action.type) {
    case LOGIN:
      user = jwt_decode(action.payload);
      localStorage.setItem("user", JSON.stringify(user));
      return { ...state, user };
    case REGISTRATION:
      user = jwt_decode(action.payload);
      localStorage.setItem("user", JSON.stringify(user));
      return { ...state, user };
    case LOGOUT:
      localStorage.removeItem("user");
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
      }
      return { ...state, user: null };
    default:
      return state;
  }
};

export default AuthReducer;
