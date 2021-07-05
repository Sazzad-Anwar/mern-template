import { Switch, Route, Redirect } from 'react-router-dom';
import HomeScreen from '../Screens/HomeScreen';
import NotFound from '../CustomComponents/NotFound';
import ProtectedRoute from '../Components/ProtectedRoute';
import Dashboard from '../Screens/Dashboard';

const AppRoutes = () => (
    <Switch>
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={HomeScreen} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
    </Switch>
);

export default AppRoutes;
