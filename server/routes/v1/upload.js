/*
 * This file contains all uploading routes for user and admin use
 */

const { AccessTokenValidation } = require("auth-middleware-jwt");
const { Router } = require("express");
const deleteFile = require("../../controllers/v1/upload/deleteFile");
const getAllFiles = require("../../controllers/v1/upload/getAllFiles");
const updateFile = require("../../controllers/v1/upload/updateOneFile");
const { uploadFile } = require("../../controllers/v1/upload/uploadFile");
const checkUser = require("../../middlewares/checkUser");
const { upload } = require("../../middlewares/multerMiddleware");
const axios = require("axios");
const router = Router();

/*
* * @Description: Get all files or files by folder id
* * @Route: /api/v1/files?folderId=[folderId]
* * @Method: GET
! * @Access: SuperAdmin, Admin, User
*/
router.route("/").get(AccessTokenValidation, checkUser(), getAllFiles);

/*
* * @Description: Update or delete one file from db and storage
* * @Route: /api/v1/files/:id
* * @Method: PUT,DELETE
! * @Access: SuperAdmin, Admin, User
*/
router
  .route("/:id")
  .put(AccessTokenValidation, checkUser(), updateFile)
  .delete(AccessTokenValidation, checkUser(), deleteFile);

/*
* * @Description: File uploading route for access users
* * @Route: /api/v1/files/upload?folderId=[folderId]
* * @Method: POST
! * @Access: SuperAdmin, Admin, User
*/
router
  .route("/upload")
  .post(
    AccessTokenValidation,
    checkUser(),
    upload.array("files", 10),
    uploadFile
  );

/*
 * * @Description: Call the routes to save the api end point in db;
 */
axios
  .post(`${process.env.API_URL}/api/v1/files/upload`)
  .catch((error) => console.log(error.message));
axios
  .put(`${process.env.API_URL}/api/v1/files/:id`)
  .catch((error) => console.log(error.message));
axios
  .get(`${process.env.API_URL}/api/v1/files?folderId=[folderId]`)
  .catch((error) => console.log(error.message));
axios
  .delete(`${process.env.API_URL}/api/v1/files/:id`)
  .catch((error) => console.log(error.message));

module.exports = router;
