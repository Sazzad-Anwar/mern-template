/*
* * @Description: File uploading route for access users
* * @Route: /api/v1/folders
* * @Method: POST
! * @Access: SuperAdmin, Admin,
*/

const expressAsyncHandler = require("express-async-handler");
const Folder = require("../../../models/folder");
const folderInputValidation = require("../../../utils/InputValidation/folder");

const createFolder = expressAsyncHandler(async (req, res) => {
  const { name } = await folderInputValidation.validateAsync(req.body);

  const folderExist = await Folder.findOne({ name }).lean();

  if (folderExist) {
    res.status(400).json({
      status: "failed",
      message: "Folder already exists",
    });
  } else {
    const newFolder = await Folder.create({
      name,
    });

    res.status(201).json({
      status: "success",
      data: newFolder,
    });
  }
});

module.exports = createFolder;
