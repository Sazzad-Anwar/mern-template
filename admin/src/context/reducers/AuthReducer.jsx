import { LOGIN, LOGOUT, REGISTRATION } from "../constants/AuthConstants";
import jwt_decode from "jwt-decode";

const AuthReducer = (state = {}, action) => {
  let user;
  switch (action.type) {
    case LOGIN:
      user = jwt_decode(action.payload);
      localStorage.setItem("user", JSON.stringify(user));
      return { user };
    case REGISTRATION:
      user = jwt_decode(action.payload.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      return { user };
    case LOGOUT:
      localStorage.removeItem("user");
      return { user: null };
    default:
      return state;
  }
};

export default AuthReducer;
