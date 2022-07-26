/*
* * @Description: Update or delete one file from db and storage
* * @Route: /api/v1/files/:id
* * @Method: PUT
! * @Access: SuperAdmin, Admin, User
*/

const expressAsyncHandler = require("express-async-handler");
const Upload = require("../../../models/uploads");

const updateFile = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const file = await Upload.findById(id).populate("folder");

  if (!file) {
    return res.status(404).json({
      status: "failed",
      message: "File not found",
    });
  } else {
    const { name } = req.body;
    const fileUpdate = await Upload.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).json({
      status: "success",
      data: fileUpdate,
    });
  }
});

module.exports = updateFile;
