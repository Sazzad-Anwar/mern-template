/*
 * This file contains all api routes for role management
 */
const { AccessTokenValidation } = require("auth-middleware-jwt");
const { Router } = require("express");
const getAPI = require("../controllers/api/getAllAPI");
const router = Router();

/*
* * @Description: Get all api route for role management
* * @Route: /api/v1/api/getAPI
* * @Method: GET
! * @Access: Super Admin
*/
router.route("/").get(AccessTokenValidation, getAPI);

module.exports = router;
