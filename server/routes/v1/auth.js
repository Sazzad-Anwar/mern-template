/*
 * This file contains all authentication routes for a user
 */

const { AccessTokenValidation } = require("auth-middleware-jwt");
const { Router } = require("express");
const getPasswordResetLink = require("../../controllers/v1/Auth/getPasswordResetLink");
const loginController = require("../../controllers/v1/Auth/login");
const registrationController = require("../../controllers/v1/Auth/register");
const resetPassword = require("../../controllers/v1/Auth/resetPassword");
const checkSessionController = require("../../controllers/v1/Auth/sessionCheck");
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
router
  .route("/checkSession")
  .get(AccessTokenValidation, checkSessionController);

/*
* * @Description: Send email with reset password link
* * @Route: /api/v1/auth/resetPassword
* * @Method: GET
! * @Access: Admin, SuperAdmin, User
*/
router
  .route("/resetPassword/:email")
  .get(getPasswordResetLink)
  .post(resetPassword);

module.exports = router;
