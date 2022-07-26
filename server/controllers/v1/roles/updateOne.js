/*
* * @Description: Get a role by id
* * @Route: /api/v1/roles
* * @Method: PUT
! * @Access: SuperAdmin
*/

const expressAsyncHandler = require("express-async-handler");
const Role = require("../../../models/role");
const roleInput = require("../../../utils/InputValidation/roleInput");
const User = require("../../../models/User");

const updateRole = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { role, accessRoutes } = await roleInput.validateAsync(req.body);

  const roleExist = await Role.findByIdAndUpdate(id);

  if (!roleExist) {
    console.log(404);
    res.status(404).json({
      status: "failed",
      message: "Role does not exist",
    });
  } else {
    roleExist.role = role ?? roleExist.role;
    roleExist.accessRoutes = accessRoutes;

    // let userRole = await User.find({ role: roleExist.role });

    // if (userRole.length > 0) {

    //   userRole.role = role;
    //   await userRole.save();

    // }

    await roleExist.save();

    res.status(200).json({
      status: "success",
      data: roleExist,
    });
  }
});

module.exports = updateRole;
