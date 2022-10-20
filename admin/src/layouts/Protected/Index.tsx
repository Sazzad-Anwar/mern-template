import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContextProvider';

type ChildrenType = {
    component: React.ComponentType;
};

const ProtectedRoute: FC<ChildrenType> = ({ component: Component }) => {
    const { auth } = useGlobalContext();

    if (auth.user?.isLoggedIn) {
        return <Component />;
    } else {
        return <Navigate to="/login" />;
    }
};

export default ProtectedRoute;
