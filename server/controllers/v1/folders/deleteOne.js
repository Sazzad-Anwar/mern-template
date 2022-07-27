/*
* * @Description: File uploading route for access users
* * @Route: /api/v1/folders/:id
* * @Method: Delete
! * @Access: SuperAdmin, Admin,
*/

const expressAsyncHandler = require("express-async-handler");
const removeDir = require("../../../libs/removeDir");
const Folder = require("../../../models/folder");
const Upload = require("../../../models/uploads");

const deleteFolder = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  const folderExist = await Folder.findById(id).lean();

  const folderHasFiles = await Upload.findOne({ folder: id }).lean();

  if (folderExist && folderHasFiles) {
    res.status(400).json({
      status: "failed",
      message: "Folder is not empty",
    });
  } else if (!folderExist) {
    res.status(400).json({
      status: "failed",
      message: "Folder already exists",
    });
  } else {
    await Folder.findByIdAndDelete(id);

    removeDir(folderExist.name);

    res.status(200).json({
      status: "success",
      message: `Folder ${folderExist.name} is deleted`,
    });
  }
});

module.exports = deleteFolder;
