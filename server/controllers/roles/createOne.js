/*
* * @Description: Get all roles
* * @Route: /api/v1/roles
* * @Method: POST
! * @Access: SuperAdmin
*/

const expressAsyncHandler = require("express-async-handler");
const Role = require("../../models/role");
const roleInput = require("../../utils/InputValidation/roleInput");

const createRole = expressAsyncHandler(async (req, res) => {
  const { role, accessRoutes } = await roleInput.validateAsync(req.body);

  const roleExist = await Role.findOne({ role }).lean();

  if (roleExist) {
    return res.status(400).json({
      status: "failed",
      message: "Role already exists",
    });
  } else {
    const newRole = await Role.create({
      role,
      accessRoutes,
    });

    res.status(201).json({
      status: "success",
      data: newRole,
    });
  }
});

module.exports = createRole;
