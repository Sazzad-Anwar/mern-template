/*
* * @Description: Get a role by id
* * @Route: /api/v1/roles
* * @Method: GET
! * @Access: SuperAdmin
*/

const expressAsyncHandler = require("express-async-handler");
const Role = require("../../../models/role");
const roleInput = require("../../../utils/InputValidation/roleInput");

const getRoleById = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  const role = await Role.findByIdAndUpdate(id);

  if (!role) {
    console.log(404);
    res.status(404).json({
      status: "failed",
      message: "Role does not exist",
    });
  } else {
    res.status(200).json({
      status: "success",
      data: role,
    });
  }
});

module.exports = getRoleById;
