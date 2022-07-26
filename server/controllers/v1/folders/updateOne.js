/*
* * @Description: File uploading route for access users
* * @Route: /api/v1/folders/:id
* * @Method: PUT
! * @Access: SuperAdmin, Admin,
*/

const expressAsyncHandler = require("express-async-handler");
const Folder = require("../../../models/folder");
const folderInputValidation = require("../../../utils/InputValidation/folder");

const updateFolder = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = await folderInputValidation.validateAsync(req.body);

  const folderExist = await Folder.findById(id);

  if (!folderExist) {
    res.status(404).json({
      status: "failed",
      message: "Folder does not exist",
    });
  } else {
    folderExist.name = name;
    let updatedFolder = await folderExist.save();

    res.status(200).json({
      status: "success",
      data: updatedFolder,
    });
  }
});

module.exports = updateFolder;
