import { Router } from 'express';
import getLoggedInUser from '../../controllers/user/getLoggedInUser.controller';
import { tokenValidation } from '../../library/auth-token';

let router: Router = Router();

/**
 * * Get loggedIn user details
 * ? Route: api/v1/users/loggedIn
 * ! Access: Only authenticated user
 * @POST @GET
 */

router.route('/loggedIn').get(tokenValidation, getLoggedInUser);

export default router;
