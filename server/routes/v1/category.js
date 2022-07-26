/*
 * This file contains all routes for category operations
 */
const { AccessTokenValidation } = require("auth-middleware-jwt");
const { Router } = require("express");
const checkUser = require("../../middlewares/checkUser");
const router = Router();
const axios = require("axios");
const createCategory = require("../../controllers/v1/categories/createOne");
const getAllCategories = require("../../controllers/v1/categories/getAll");
const getCategoryById = require("../../controllers/v1/categories/getOneById");
const updateCategory = require("../../controllers/v1/categories/updateOne");
const deleteCategory = require("../../controllers/v1/categories/deleteOne");
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

router
  .route("/:id")
  .get(getCategoryById)
  .put(AccessTokenValidation, checkUser(), updateCategory)
  .delete(AccessTokenValidation, checkUser(), deleteCategory);

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
  .put(`${process.env.API_URL}/api/v1/categories/someUser`)
  .catch((error) => console.log(error.message));
axios
  .delete(`${process.env.API_URL}/api/v1/categories/someUser`)
  .catch((error) => console.log(error.message));

module.exports = router;
