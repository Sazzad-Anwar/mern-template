/*
* * @Description: Get all files or files by folder id
* * @Route: /api/v1/files?folderId=[folderId]
* * @Method: GET
! * @Access: SuperAdmin, Admin, User
*/

const expressAsyncHandler = require("express-async-handler");
const Upload = require("../../../models/uploads");

const getAllFiles = expressAsyncHandler(async (req, res) => {
  let { folderId, pageSize, page, q } = req.query;

  const searchByName = q ? { name: { $regex: q, $options: "i" } } : {};

  if (!folderId) {
    const files = await Upload.find()
      .populate({
        path: "folder",
        select: "name id",
      })
      .sort({ createdAt: -1 })
      .limit(pageSize ? parseInt(pageSize) : 20)
      .skip(
        page
          ? (parseInt(page) < 0 ? 1 : parseInt(page) - 1) * parseInt(pageSize)
          : 0
      )
      .lean();

    res.status(200).json({
      status: "success",
      data: files,
      totalSize: await Upload.countDocuments(),
    });
  } else if (folderId && q) {
    const files = await Upload.find({
      $and: [{ folder: folderId }, searchByName],
    })
      .populate({
        path: "folder",
        select: "name id",
      })
      .sort({ createdAt: -1 })
      .limit(pageSize ? parseInt(pageSize) : 20)
      .skip(
        page
          ? (parseInt(page) < 0 ? 1 : parseInt(page) - 1) * parseInt(pageSize)
          : 0
      )
      .lean();

    res.status(200).json({
      status: "success",
      data: files,
      totalSize: await Upload.find({
        $and: [{ folder: folderId }, searchByName],
      }).countDocuments(),
    });
  } else {
    const files = await Upload.find({ folder: folderId })
      .populate({
        path: "folder",
        select: "name id",
      })
      .sort({ createdAt: -1 })
      .limit(pageSize ? parseInt(pageSize) : 20)
      .skip(
        page
          ? (parseInt(page) < 0 ? 1 : parseInt(page) - 1) * parseInt(pageSize)
          : 0
      )
      .lean();

    res.status(200).json({
      status: "success",
      data: files,
      totalSize: await Upload.find({ folder: folderId }).countDocuments(),
    });
  }
});

module.exports = getAllFiles;
