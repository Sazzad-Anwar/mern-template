/*
* * @Description: Get a user's details
* * @Route: /api/v1/users/:id
* * @Method: GET
! * @Access: SuperAdmin, Admin
*/
const expressAsyncHandler = require("express-async-handler");
const User = require("../../../models/User.js");

const getUserDetails = expressAsyncHandler(async (req, res) => {
  let { id } = req.params;

  const user = await User.findById(id).select("-password -refreshToken").lean();

  res.status(200).json({
    status: "success",
    data: user,
  });
});

module.exports = getUserDetails;
