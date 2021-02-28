import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';

const App = () => (
    <Router>
        <Route path="/" component={AppRoutes} />
    </Router>
);

export default App;
