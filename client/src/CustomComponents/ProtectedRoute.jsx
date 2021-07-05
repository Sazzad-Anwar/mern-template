/* eslint-disable react/jsx-props-no-spreading */
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ children, ...rest }) => {
    // initialize your login validation
    const auth = { user: false };
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
