/*
 * This file contains all api routes for bd locations
 */
const { AccessTokenValidation } = require("auth-middleware-jwt");
const { Router } = require("express");
const getAllLocations = require("../../controllers/v1/locations/getLocations");
const router = Router();

/*
* * @Description: Get all api route for locations
* * @Route: /api/v1/api/locations
* * @Method: GET
! * @Access: Public
*/
router.route("/").get(getAllLocations);

module.exports = router;
