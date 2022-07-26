/*
 * This file contains all app config routes for role management
 */
const { AccessTokenValidation } = require("auth-middleware-jwt");
const { Router } = require("express");
const createAppConfig = require("../../controllers/v1/appConfig/createConfig");
const getAppConfig = require("../../controllers/v1/appConfig/getConfig");
const updateAppConfig = require("../../controllers/v1/appConfig/updateConfig");
const checkUser = require("../../middlewares/checkUser");
const router = Router();

/*
* * @Description: Get all api route for role management
* * @Route: /api/v1/api/app-config
* * @Method: GET, PUT, POST
! * @Access: Super Admin
*/
router
  .route("/")
  .get(AccessTokenValidation, checkUser(), getAppConfig)
  .post(AccessTokenValidation, checkUser(), createAppConfig);

/*
* * @Description: Get all api route for role management
* * @Route: /api/v1/api/app-config/:id
* * @Method: PUT
! * @Access: Super Admin
*/
router.route("/:id").put(AccessTokenValidation, checkUser(), updateAppConfig);

module.exports = router;
