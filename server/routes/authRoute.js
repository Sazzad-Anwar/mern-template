/*
 * This file contains all authentication routes for a user
 */

const { Router } = require("express");
const loginController = require("../controllers/Auth/loginController");
const registrationController = require("../controllers/Auth/registerController");
const router = Router();

/*
* * @Description: Registration route for all user
* * @Route: /api/v1/auth/registration
* * @Method: POST
! * @Access: Public
*/
router.route("/registration").post(registrationController);

/*
* * @Description: Login route for all user
* * @Route: /api/v1/auth/login
* * @Method: POST
! * @Access: Public
*/
router.route("/login").post(loginController);

module.exports = router;
