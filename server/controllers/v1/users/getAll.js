/*
* * @Description: Get all users list
* * @Route: /api/v1/users
* * @Method: GET
! * @Access: SuperAdmin, Admin
*/
const expressAsyncHandler = require("express-async-handler");
const User = require("../../../models/User.js");

const getAllUsersController = expressAsyncHandler(async (req, res) => {
  let { q, pageSize, page } = req.query;

  const searchByName = q ? { name: { $regex: q, $options: "i" } } : {};
  const searchByEmail = q ? { email: { $regex: q, $options: "i" } } : {};
  const searchByPhoneNumber = q
    ? { phoneNumber: { $regex: q, $options: "i" } }
    : {};
  const searchByLocation = q ? { location: { $regex: q, $options: "i" } } : {};

  const users = await User.find({
    $or: [searchByName, searchByEmail, searchByPhoneNumber, searchByLocation],
  })
    .select("-password -refreshToken")
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
    data: users,
    totalSize: await User.countDocuments(),
  });
});

module.exports = getAllUsersController;
