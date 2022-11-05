/**
 * * This route will get and save the logger details to db
 */

import { Router } from 'express';
import createErrorLog from '../../controllers/error/createError.controller';
import getAnError from '../../controllers/error/getAnError.controller';
import getAllError from '../../controllers/error/getError.controller';

let router = Router();

/**
 * * Get all the logger info and create one
 * ? Route: api/v1/error-logs
 * ! Access: Only authenticated user
 * @POST @GET
 */

router.route('/').get(getAllError).post(createErrorLog);

/**
 * * Get an error details info
 * ? Route: api/v1/error-logs/:id
 * ! Access: Only authenticated user
 * @POST @GET
 */
router.route('/:id').get(getAnError);

export default router;
