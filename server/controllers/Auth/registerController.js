/*
 * * @Description: Registration route for all user
 * * @Route: /api/v1/auth/register
 * * @Method: POST
 * * @Access: Public
 */

const expressAsyncHandler = require("express-async-handler");
const User = require("../../models/User.js");
const registrationRequestVariables = require("../../utils/InputValidation/registration.js");
const { getAccessToken, getRefreshToken } = require("auth-middleware-jwt");

const registrationController = expressAsyncHandler(async (req, res) => {
  /*
   * * @Description: Registration input validation
   */
  const { name, email, password, phoneNumber, role } =
    await registrationRequestVariables.validateAsync(req.body);

  /*
   * * @Description: Check if user already exists
   */
  const user = await User.findOne({ $or: [{ email }, { phoneNumber }] });

  /*
   * * @Description: If user already exists, send a 400 status code with error message or else create a new user
   */
  if (user) {
    res.status(409);
    throw new Error("User already exists");
  } else {
    const newUser = new User({
      name,
      email,
      password,
      phoneNumber,
      role: role ?? "user",
    });

    let user = {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      phoneNumber: newUser.phoneNumber,
      avatarUrl: newUser.avatarUrl,
      role: newUser.role,
    };

    /*
     * * @Description: Generate access token and refresh token
     */
    let accessToken = await getAccessToken(user);
    let refreshToken = await getRefreshToken(user);

    newUser.refreshToken = refreshToken;

    await newUser.save();

    /*
     * * @Description: Set cookie in response
     */
    res.cookie("accessToken", `Bearer ${accessToken}`, {
      httpOnly: true,
      sameSite: "strict",
      path: "/",
      expires: new Date(
        Date.now() + parseInt(process.env.ACCESS_COOKIE_EXPIRES_IN)
      ),
      secure: process.env.NODE_ENV === "production" ? true : false,
    });

    res.status(201).json({
      status: "success",
      message: "User created successfully",
      isSuccess: true,
      data: {
        isLoggedIn: true,
        accessToken,
        refreshToken,
      },
    });
  }
});

module.exports = registrationController;
