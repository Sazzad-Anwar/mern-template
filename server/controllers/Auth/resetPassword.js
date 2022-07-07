/*
* * @Description: Send email with reset password link
* * @Route: /api/v1/auth/resetPassword/:id
* * @Method: POST
! * @Access: Admin, SuperAdmin, User
*/

const expressAsyncHandler = require("express-async-handler");
const User = require("../../models/User");

const resetPassword = expressAsyncHandler(async (req, res) => {
  const { email } = req.params;
  const { password } = req.body;

  const user = await User.findOne({ email }).select("-password -refreshToken");

  if (user) {
    user.password = password;
    await user.save();

    res.json({
      status: "success",
      message: "Password updated successfully",
    });
  } else {
    res.status(404).json({
      status: "failed",
      message: "User not found",
    });
  }
});

module.exports = resetPassword;
