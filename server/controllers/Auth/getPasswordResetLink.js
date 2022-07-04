/*
* * @Description: Send email with reset password link
* * @Route: /api/v1/auth/resetPassword/:id
* * @Method: GET
! * @Access: Admin, SuperAdmin, User
*/

const expressAsyncHandler = require("express-async-handler");
const { getAccessToken, getRefreshToken } = require("auth-middleware-jwt");
const emailSender = require('../../libs/Email/emailSender');
const User = require("../../models/User");
const jwt = require("jsonwebtoken");

const getPasswordResetLink = expressAsyncHandler(async (req, res) => {

    let { id } = req.params;

    const user = await User.findById(id).select("-password -refreshToken");

    if (user) {

        let activationToken = await jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET_KEY, { expiresIn: '5m' });

        let emailData = {
            name: user.name,
            activationId: `${process.env.APP_URL}/passwordReset/${user._id}/${activationToken}`,
            email: user.email,
            type: 'passwordReset'
        }

        emailSender(emailData);

        res.status(200).json({
            status: 'success',
            message: 'Email sent successfully'
        });

    } else {
        res.status(404).json({
            status: "failed",
            message: "User not found"
        });
    }
});

module.exports = getPasswordResetLink;