import { LOGIN, LOGOUT } from '../constants/Auth.constants';
import { AuthUserType, InitialUserStateType } from '../types/context.types';

export type AuthActionType = {
    type: 'LOGIN' | 'LOGOUT';
    payload: AuthUserType | null;
};

const AuthReducer = (state: InitialUserStateType, action: AuthActionType) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem('user', JSON.stringify(action.payload));
            return { ...state, user: action.payload };
        case LOGOUT:
            localStorage.removeItem('user');
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

export default AuthReducer;
