import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';
import AuthReducer from './reducers/Auth.reducer';
import { InitialSideBarStateType, InitialUserStateType } from './types/context.types';
import { AuthActionType } from './reducers/Auth.reducer';
import SideBarToggleReducer, { SideBarActionType } from './reducers/SideBare.reducer';

type GlobalContextProviderChildrenType = {
    children: ReactNode;
};

let initialUserState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : null,
};

let sideBarInitialState = {
    isOpen: localStorage.getItem('isSideBarOpen')
        ? JSON.parse(localStorage.getItem('isSideBarOpen') || '{}')
        : true,
};

type AuthContextPropsTypes = {
    auth: InitialUserStateType;
    authDispatch: Dispatch<AuthActionType>;
};

type SideBarContextPropsTypes = {
    sideBar: InitialSideBarStateType;
    sideBarDispatch: Dispatch<SideBarActionType>;
};

type ContextPropsTypes = AuthContextPropsTypes & SideBarContextPropsTypes;

const GlobalContext = createContext<ContextPropsTypes>({} as ContextPropsTypes);

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalContextProvider = ({ children }: GlobalContextProviderChildrenType) => {
    const [auth, authDispatch] = useReducer(AuthReducer, initialUserState);
    const [sideBar, sideBarDispatch] = useReducer(SideBarToggleReducer, sideBarInitialState);

    return (
        <GlobalContext.Provider value={{ auth, authDispatch, sideBar, sideBarDispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;
