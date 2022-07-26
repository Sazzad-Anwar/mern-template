/*
* * @Description: Update a user's details
* * @Route: /api/v1/users/:id
* * @Method: GET
! * @Access: SuperAdmin, Admin
*/
const expressAsyncHandler = require("express-async-handler");
const User = require("../../../models/User.js");
const updateUserRequestVariables = require("../../../utils/InputValidation/updateUser.js");

const getUserDetailsUpdate = expressAsyncHandler(async (req, res) => {
  let { id } = req.params;
  let {
    name,
    email,
    phoneNumber,
    isActive,
    dateOfBirth,
    location,
    role,
    avatarUrl,
  } = await updateUserRequestVariables.validateAsync(req.body);

  const user = await User.findById(id);

  if (user) {
    user.name = name;
    user.email = email;
    user.phoneNumber = phoneNumber;
    user.isActive = isActive;
    user.role = role;
    user.dateOfBirth = dateOfBirth;
    user.location = location;
    user.avatarUrl = avatarUrl;
    user.save();

    res.status(200).json({
      status: "success",
      data: user,
    });
  } else {
    res.status(404).json({
      status: "failed",
      message: "User not found",
    });
  }
});

module.exports = getUserDetailsUpdate;
