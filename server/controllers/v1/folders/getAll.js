/*
* * @Description: File uploading route for access users
* * @Route: /api/v1/folders
* * @Method: GET
! * @Access: SuperAdmin, Admin,
*/

const expressAsyncHandler = require("express-async-handler");
const Folder = require("../../../models/folder");

const getAllFolders = expressAsyncHandler(async (req, res) => {
  const folders = await Folder.find().lean();

  res.status(200).json({
    status: "success",
    data: folders,
  });
});

module.exports = getAllFolders;
