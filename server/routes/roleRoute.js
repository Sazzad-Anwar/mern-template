/*
 *   This file contains all routes for a roles
 */

const { AccessTokenValidation } = require("auth-middleware-jwt");
const { Router } = require("express");
const router = Router();
const getRoles = require("../controllers/roles/getAll");
const createRoles = require("../controllers/roles/createOne");
const updateRoles = require("../controllers/roles/updateOne");
const deleteRoles = require("../controllers/roles/deleteOne");
const checkUser = require("../middlewares/checkUser");

/*
* * @Description: Get all roles
* * @Route: /api/v1/roles
* * @Method: GET, POST
! * @Access: SuperAdmin
*/
router
  .route("/")
  .get(AccessTokenValidation, checkUser(), getRoles)
  .post(AccessTokenValidation, checkUser(), createRoles);

/*
* * @Description: Get all roles
* * @Route: /api/v1/roles
* * @Method: PUT,DELETE
! * @Access: SuperAdmin
*/
router
  .route("/:id")
  .put(AccessTokenValidation, checkUser(), updateRoles)
  .delete(AccessTokenValidation, checkUser(), deleteRoles);

module.exports = router;
