/*
* * @Description: Get all roles
* * @Route: /api/v1/roles
* * @Method: DELETE
! * @Access: SuperAdmin
*/

const expressAsyncHandler = require("express-async-handler");
const Role = require("../../models/role");

const updateRole = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  const roleExist = await Role.findByIdAndDelete(id).lean();

  if (!roleExist) {
    return res.status(404).json({
      status: "failed",
      message: "Role does not exist",
    });
  } else {
    res.status(200).json({
      status: "success",
      message: "Role has been deleted",
    });
  }
});

module.exports = updateRole;
