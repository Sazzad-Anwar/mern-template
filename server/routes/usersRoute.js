/*
 * This file contains all routes for a users
 */
const { AccessTokenValidation } = require("auth-middleware-jwt");
const { Router } = require("express");
const deleteUser = require("../controllers/users/deleteUser");
const getUserDetails = require("../controllers/users/getUserDetails");
const getAllUsersController = require("../controllers/users/getUsers");
const hasSuperAdmin = require("../controllers/users/hasSuperAdmin");
const getUserDetailsUpdate = require("../controllers/users/updateUserDetails");
const checkUser = require("../middlewares/checkUser");
const router = Router();
const axios = require("axios");
require("dotenv").config();

/*
* * @Description: Get all users
* * @Route: /api/v1/users
* * @Method: GET
! * @Access: SuperAdmin, Admin
*/
router
  .route("/")
  .get(AccessTokenValidation, checkUser(), getAllUsersController);

/*
* * @Description: Get a user's details
* * @Route: /api/v1/users/hasSuperAdmin
* * @Method: GET
! * @Access: Public
*/

router.route("/hasSuperAdmin").get(hasSuperAdmin);

/*
* * @Description: Get a user's details
* * @Route: /api/v1/users/:id
* * @Method: GET
! * @Access: SuperAdmin, Admin
*/
router
  .route("/:id")
  .get(AccessTokenValidation, checkUser(), getUserDetails)
  .put(AccessTokenValidation, checkUser(), getUserDetailsUpdate)
  .delete(AccessTokenValidation, checkUser(), deleteUser);

/*
 * * @Description: Call the routes to save the api end point in db;
 */
axios
  .get(`${process.env.API_URL}/api/v1/users`)
  .catch((error) => console.log(error.message));
axios
  .put(`${process.env.API_URL}/api/v1/users/someUser`)
  .catch((error) => console.log(error.message));
axios
  .delete(`${process.env.API_URL}/api/v1/users/someUser`)
  .catch((error) => console.log(error.message));

module.exports = router;
