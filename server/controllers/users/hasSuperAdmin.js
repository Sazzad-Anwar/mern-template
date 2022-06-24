/*
* * @Description: Get a user's details
* * @Route: /api/v1/users/hasSuperAdmin
* * @Method: GET
! * @Access: Public
*/

const expressAsyncHandler = require("express-async-handler");
const User = require("../../models/User");

const hasSuperAdmin = expressAsyncHandler(async (req, res) => {
    const user = await User.find({ role: "superAdmin" });
    if (user.length) {
        res.status(200).json({
            status: "success",
            hasSuperAdmin: true,
        });
    } else {
        res.status(404).json({
            status: 'failed',
            hasSuperAdmin: false,
        })
    }
});

module.exports = hasSuperAdmin;