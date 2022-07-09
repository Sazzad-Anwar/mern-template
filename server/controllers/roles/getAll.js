/*
* * @Description: Get all roles
* * @Route: /api/v1/roles
* * @Method: GET
! * @Access: SuperAdmin
*/

const expressAsyncHandler = require("express-async-handler");
const Role = require("../../models/role");

const getRoles = expressAsyncHandler(async (req, res) => {
  const roles = await Role.find().select("-__v").lean();

  res.status(200).json({
    status: "success",
    data: roles,
  });
});

module.exports = getRoles;
