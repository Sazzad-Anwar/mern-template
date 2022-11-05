/**
 * * This route will have the route for authentication
 */

import { Router } from 'express';
import login from '../../controllers/auth/auth.login';
import renewToken from '../../controllers/auth/renewToken.auth';
import createUser from '../../controllers/user/registerUser.controller';

let router = Router();

/**
 * * Login router
 * ? Route: api/v1/auth/login
 * ! Access: Public
 * @POST
 */

router.route('/login').post(login);

/**
 * * Register router
 * ? Route: api/v1/auth/register
 * ! Access: Public
 * @POST
 */
router.route('/register').post(createUser);

/**
 * * Renew token router
 * ? Route: api/v1/auth/renew-token
 * ! Access: Protected
 * @POST
 */

router.route('/renew-token').post(renewToken);

export default router;
