import { Application } from 'express';
import UserRoute from './user.route';
import ErrorLogsRoute from './error.route';
import AuthRoute from './auth.route';

const routesV1 = (app: Application) => {
    app.use('/api/v1/users', UserRoute);
    app.use('/api/v1/auth', AuthRoute);
    app.use('/api/v1/error-logs', ErrorLogsRoute);
};

export default routesV1;
