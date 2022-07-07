/*
 * This file contains all routes for category operations
 */
const { AccessTokenValidation } = require("auth-middleware-jwt");
const { Router } = require("express");
const checkUser = require("../middlewares/checkUser");
const router = Router();
const axios = require("axios");
const createCategory = require("../controllers/categories/createCategory");
const getAllCategories = require("../controllers/categories/getAllCategories");
require("dotenv").config();

/*
* * @Description: Get all categories and create one
* * @Route: /api/v1/categories
* * @Method: GET, POST
! * @Access: Public, SuperAdmin
*/
router
  .route("/")
  .get(getAllCategories)
  .post(AccessTokenValidation, checkUser(), createCategory);

/*
* * @Description: Get, Update and delete a category
* * @Route: /api/v1/categories/:id
* * @Method: Get, PUT, DELETE
! * @Access: Public,SuperAdmin, SuperAdmin
*/

router.route("/:id").get().put().delete();

/*
 * * @Description: Call the routes to save the api end point in db;
 */
axios
  .get(`${process.env.API_URL}/api/v1/categories`)
  .catch((error) => console.log(error.message));
axios
  .post(`${process.env.API_URL}/api/v1/categories`)
  .catch((error) => console.log(error.message));
axios
  .put(`${process.env.API_URL}/api/v1/categories/randomId`)
  .catch((error) => console.log(error.message));
axios
  .delete(`${process.env.API_URL}/api/v1/categories/randomId`)
  .catch((error) => console.log(error.message));

module.exports = router;
