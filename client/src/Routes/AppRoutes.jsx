import { Switch, Route } from 'react-router-dom';
import HomeScreen from '../Screens/HomeScreen';

const AppRoutes = () => (
    <Switch>
        <Route exact path="/" component={HomeScreen} />
    </Switch>
);

export default AppRoutes;
