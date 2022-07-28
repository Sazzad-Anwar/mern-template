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
  const folder = await Folder.findById(id).lean();

  if (folder) {
    res.status(200).json({
      status: "success",
      data: folder,
    });
  } else {
    res.status(404).json({
      status: "failed",
      message: "Folder not found",
    });
  }
});

module.exports = getAllFolders;
