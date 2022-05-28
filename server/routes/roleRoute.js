/*
*   This file contains all routes for a roles
*/

const { AccessTokenValidation } = require("auth-middleware-jwt");
const { Router } = require("express");
const router = Router();
const getRoles = require('../controllers/roles/getRolesController');
const createRoles = require('../controllers/roles/createRoleController');
const updateRoles = require('../controllers/roles/updateRoleController');
const deleteRoles = require('../controllers/roles/deleteRoleController');
const checkUser = require("../middlewares/checkUser");

/*
* * @Description: Get all roles
* * @Route: /api/v1/roles
* * @Method: GET, POST
! * @Access: SuperAdmin
*/
router
    .route('/')
    .get(AccessTokenValidation, checkUser(), getRoles)
    .post(AccessTokenValidation, checkUser(), createRoles);

/*
* * @Description: Get all roles
* * @Route: /api/v1/roles
* * @Method: PUT,DELETE
! * @Access: SuperAdmin
*/
router
    .route('/:id')
    .put(AccessTokenValidation, checkUser(), updateRoles)
    .delete(AccessTokenValidation, checkUser(), deleteRoles);


module.exports = router;