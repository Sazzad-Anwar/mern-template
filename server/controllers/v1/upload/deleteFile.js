/*
* * @Description: Update or delete one file from db and storage
* * @Route: /api/v1/files/:id
* * @Method: DELETE
! * @Access: SuperAdmin, Admin, User
*/

const expressAsyncHandler = require("express-async-handler");
const removeFile = require("../../../libs/removeFile");
const Upload = require("../../../models/uploads");

const deleteFile = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const file = await Upload.findById(id).populate("folder");

  if (!file) {
    return res.status(404).json({
      status: "fail",
      message: "File not found",
    });
  } else {
    let fileRemovedRes = removeFile(file.url);

    console.log(fileRemovedRes);
    await Upload.findByIdAndDelete(id);
    res.status(200).json({
      status: "success",
      data: `File ${file.name} deleted`,
    });
  }
});

module.exports = deleteFile;
