export type AuthUserType = {
    name: string;
    email: string;
    role: string;
    isLoggedIn: boolean;
};

export type InitialUserStateType = {
    user: AuthUserType | null;
};

export type InitialSideBarStateType = {
    isOpen: boolean;
};
