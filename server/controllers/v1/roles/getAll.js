/*
* * @Description: Get all roles
* * @Route: /api/v1/roles
* * @Method: GET
! * @Access: SuperAdmin
*/

const expressAsyncHandler = require("express-async-handler");
const Role = require("../../../models/role");
const User = require("../../../models/User");

const getRoles = expressAsyncHandler(async (req, res) => {
  const { role } = req.query;

  const roles = await Role.find().select("-__v").lean();

  if (role) {
    const count = await User.find({ role }).countDocuments();
    res.status(200).json({
      status: "success",
      data: count,
    });
  } else {
    res.status(200).json({
      status: "success",
      data: roles,
    });
  }
});

module.exports = getRoles;
