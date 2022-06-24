/*
* * @Description: Get all roles
* * @Route: /api/v1/roles
* * @Method: PUT
! * @Access: SuperAdmin
*/

const expressAsyncHandler = require('express-async-handler');
const Role = require('../../models/role');
const roleInput = require('../../utils/InputValidation/roleInput');

const updateRole = expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    const { role, accessRoutes } = await roleInput.validateAsync(req.body);

    const roleExist = await Role.findByIdAndUpdate(id);

    if (!roleExist) {
        console.log(404)
        res.status(404).json({
            status: 'failed',
            message: 'Role does not exist',
        });
    } else {
        roleExist.role = role ?? roleExist.role;
        roleExist.accessRoutes = accessRoutes;

        await roleExist.save();

        res.status(200).json({
            status: 'success',
            data: roleExist,
        });
    }
});

module.exports = updateRole;