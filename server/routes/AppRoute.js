//@Description: All types of application route's configuration is set in this file
import { Router } from 'express';
const router = Router();
import { test } from '../controllers/AppController.js'

/*
*   @Description: Route for main application
*/
router
    .route('/')
    .get(test)

export default router;