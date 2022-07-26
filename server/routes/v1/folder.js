/*
 * This file contains all folder routes for user and admin use
 */

const { AccessTokenValidation } = require("auth-middleware-jwt");
const { Router } = require("express");
const createFolder = require("../../controllers/v1/folders/createOne");
const deleteFolder = require("../../controllers/v1/folders/deleteOne");
const getAllFolders = require("../../controllers/v1/folders/getAll");
const updateFolder = require("../../controllers/v1/folders/updateOne");
const getOneFolderById = require("../../controllers/v1/folders/getById");
const router = Router();
const axios = require("axios");
const checkUser = require("../../middlewares/checkUser");

/*
* * @Description: Create and get folders for uploads
* * @Route: /api/v1/folders
* * @Method: GET, POST
! * @Access: SuperAdmin, Admin,
*/

router
  .route("/")
  .get(AccessTokenValidation, checkUser(), getAllFolders)
  .post(AccessTokenValidation, checkUser(), createFolder);

/*
* * @Description: Update and delete folders for uploads
* * @Route: /api/v1/folders/:id
* * @Method: PUT, DELETE
! * @Access: SuperAdmin, Admin,
*/

router
  .route("/:id")
  .get(AccessTokenValidation, checkUser(), getOneFolderById)
  .put(AccessTokenValidation, checkUser(), updateFolder)
  .delete(AccessTokenValidation, checkUser(), deleteFolder);

/*
 * * @Description: Call the routes to save the api end point in db;
 */

axios
  .get(`${process.env.API_URL}/api/v1/folders`)
  .catch((error) => console.log(error.message));
axios
  .post(`${process.env.API_URL}/api/v1/folders`)
  .catch((error) => console.log(error.message));
axios
  .put(`${process.env.API_URL}/api/v1/folders/someId`)
  .catch((error) => console.log(error.message));
axios
  .delete(`${process.env.API_URL}/api/v1/folders/someId`)
  .catch((error) => console.log(error.message));

module.exports = router;
