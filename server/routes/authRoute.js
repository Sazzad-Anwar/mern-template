/*
 * This file contains all authentication routes for a user
 */

const { AccessTokenValidation } = require("auth-middleware-jwt");
const { Router } = require("express");
const loginController = require("../controllers/Auth/loginController");
const registrationController = require("../controllers/Auth/registerController");
const checkSessionController = require("../controllers/Auth/sessionCheckController");
const checkUser = require("../middlewares/checkUser");
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

/*
* * @Description: Check session route for all user
* * @Route: /api/v1/auth/checkSession
* * @Method: GET
! * @Access: Admin, SuperAdmin, User
*/
router.route("/checkSession").get(AccessTokenValidation, checkSessionController);

/*
* * @Description: Send email with reset password link
* * @Route: /api/v1/auth/resetPassword
* * @Method: GET
! * @Access: Admin, SuperAdmin, User
*/
router.route("/resetPassword/:id").get(getPasswordResetLink);

module.exports = router;
