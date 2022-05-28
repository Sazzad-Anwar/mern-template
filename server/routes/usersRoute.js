/*
 * This file contains all routes for a users
 */
const { AccessTokenValidation } = require("auth-middleware-jwt");
const { Router } = require("express");
const deleteUser = require("../controllers/users/deleteUser");
const getUserDetails = require("../controllers/users/getUserDetails");
const getAllUsersController = require("../controllers/users/getUsersController");
const hasSuperAdmin = require("../controllers/users/hasSuperAdmin");
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
    checkUser(),
    getAllUsersController
  );


/*
* * @Description: Get a user's details
* * @Route: /api/v1/users/hasSuperAdmin
* * @Method: GET
! * @Access: Public
*/

router
  .route('/hasSuperAdmin')
  .get(hasSuperAdmin);

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
    checkUser(),
    getUserDetails
  )
  .put(
    AccessTokenValidation,
    checkUser(),
    getUserDetailsUpdate
  )
  .delete(
    AccessTokenValidation,
    checkUser(),
    deleteUser
  );

module.exports = router;
