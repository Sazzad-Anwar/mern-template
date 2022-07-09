/*
* * @Description: Get a user's details
* * @Route: /api/v1/users/:id
* * @Method: DELETE
! * @Access: SuperAdmin, Admin
*/
const expressAsyncHandler = require("express-async-handler");
const User = require("../../models/User.js");

const deleteUser = expressAsyncHandler(async (req, res) => {
  let { id } = req.params;

  await User.findByIdAndDelete({ _id: id });

  res.status(200).json({
    status: "success",
    data: `User ${id} is deleted successfully`,
  });
});

module.exports = deleteUser;
