/*
* * @Description: Get a folder by ID
* * @Route: /api/v1/folders/:id
* * @Method: GET
! * @Access: SuperAdmin, Admin,
*/

const expressAsyncHandler = require("express-async-handler");
const Folder = require("../../../models/folder");

const getAllFolders = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const folders = await Folder.findById(id).lean();

  res.status(200).json({
    status: "success",
    data: folders,
  });
});

module.exports = getAllFolders;
