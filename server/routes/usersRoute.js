/*
 * This file contains all routes for a users
 */
const { AccessTokenValidation } = require("auth-middleware-jwt");
const { Router } = require("express");
const deleteUser = require("../controllers/users/deleteUser");
const getUserDetails = require("../controllers/users/getUserDetails");
const getAllUsersController = require("../controllers/users/getUsersController");
const getUserDetailsUpdate = require("../controllers/users/updateUserDetails");
const checkUser = require("../middlewares/checkUser");
const router = Router();

/*
* * @Description: Get all users
* * @Route: /api/v1/users
* * @Method: GET
! * @Access: SuperAdmin, Admin
*/
router
  .route("/")
  .get(
    AccessTokenValidation,
    checkUser(["superAdmin", "admin"]),
    getAllUsersController
  );

/*
* * @Description: Get a user's details
* * @Route: /api/v1/users/:id
* * @Method: GET
! * @Access: SuperAdmin, Admin
*/
router
  .route("/:id")
  .get(
    AccessTokenValidation,
    checkUser(["superAdmin", "admin", "user"]),
    getUserDetails
  )
  .put(
    AccessTokenValidation,
    checkUser(["superAdmin", "admin", "user"]),
    getUserDetailsUpdate
  )
  .delete(
    AccessTokenValidation,
    checkUser(["superAdmin", "admin"]),
    deleteUser
  );

module.exports = router;
