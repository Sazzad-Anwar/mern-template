/*
 * This file contains all api routes for error log
 */

const { AccessTokenValidation } = require("auth-middleware-jwt");
const { Router } = require("express");
const getAllErrorLogs = require("../../controllers/v1/errorLogs/getAll");
const checkUser = require("../../middlewares/checkUser");
const axios = require("axios");
const getOneById = require("../../controllers/v1/errorLogs/getOneById");
const router = Router();

/*
* * @Description: Get all error logs
* * @Route: /api/v1/api/error-logs
* * @Method: GET
! * @Access: Super Admin
*/

router.route("/").get(AccessTokenValidation, checkUser(), getAllErrorLogs);

/*
* * @Description: Get error log by ID
* * @Route: /api/v1/api/error-logs/:id
* * @Method: GET
! * @Access: Super Admin
*/

router.route("/:id").get(AccessTokenValidation, checkUser(), getOneById);

/*
 * * @Description: Call the routes to save the api end point in db;
 */
axios
  .get(`${process.env.API_URL}/api/v1/error-logs`)
  .catch((error) => console.log(error.message));

module.exports = router;
