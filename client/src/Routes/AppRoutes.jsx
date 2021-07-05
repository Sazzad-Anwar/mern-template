import { Switch, Route, Redirect } from 'react-router-dom';
import HomeScreen from '../Screens/HomeScreen';
import NotFound from '../CustomComponents/NotFound';
import ProtectedRoute from '../Components/ProtectedRoute';
import Dashboard from '../Screens/Dashboard';
import Login from '../Screens/Login';

const AppRoutes = () => (
    <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <Route path="/not-found" component={NotFound} />
        <Route exact path="/" component={HomeScreen} />
        <Redirect to="/not-found" />
    </Switch>
);

export default AppRoutes;
