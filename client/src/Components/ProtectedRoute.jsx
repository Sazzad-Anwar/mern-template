/* eslint-disable react/jsx-props-no-spreading */
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ children, ...rest }) => {
    // const auth = useAuth();
    const auth = {};
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};
export default ProtectedRoute;
