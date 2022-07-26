/*
 *   This file contains all routes for a roles
 */

const { AccessTokenValidation } = require("auth-middleware-jwt");
const { Router } = require("express");
const router = Router();
const getRoles = require("../../controllers/v1/roles/getAll");
const createRoles = require("../../controllers/v1/roles/createOne");
const updateRoles = require("../../controllers/v1/roles/updateOne");
const deleteRoles = require("../../controllers/v1/roles/deleteOne");
const checkUser = require("../../middlewares/checkUser");
const getRoleById = require("../../controllers/v1/roles/getOneById");

/*
* * @Description: Get all roles
* * @Route: /api/v1/roles
* * @Method: GET, POST
! * @Access: SuperAdmin
*/
router
  .route("/")
  .get(AccessTokenValidation, getRoles)
  .post(AccessTokenValidation, checkUser(), createRoles);

/*
* * @Description: Get all roles
* * @Route: /api/v1/roles
* * @Method: PUT,DELETE
! * @Access: SuperAdmin
*/
router
  .route("/:id")
  .get(AccessTokenValidation, checkUser(), getRoleById)
  .put(AccessTokenValidation, checkUser(), updateRoles)
  .delete(AccessTokenValidation, checkUser(), deleteRoles);

module.exports = router;
