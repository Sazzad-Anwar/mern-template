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

    let { email } = req.params;

    const user = await User.findOne({ email }).select("-password -refreshToken");

    if (user) {

        let activationToken = await jwt.sign({ id: user._id, email }, process.env.ACCESS_TOKEN_SECRET_KEY, { expiresIn: process.env.RESET_PASSWORD_LINK_EXPIRES_IN });
        console.log(activationToken);

        let emailData = {
            name: user.name,
            resetLink: `${process.env.APP_URL}/passwordReset/${activationToken}`,
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