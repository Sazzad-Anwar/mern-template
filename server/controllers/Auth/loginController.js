/*
 * * @Description: Login route for all user
 * * @Route: /api/v1/auth/login
 * * @Method: POST
 ! * @Access: Public
 */
const expressAsyncHandler = require("express-async-handler");
const { getAccessToken, getRefreshToken } = require("auth-middleware-jwt");
const loginRequestVariables = require("../../utils/InputValidation/login");
const User = require("../../models/User");

const loginController = expressAsyncHandler(async (req, res) => {
  /*
   * * @Description: Login input validation
   */
  const { email, password, phoneNumber } =
    await loginRequestVariables.validateAsync(req.body);

  /*
   * * @Description: Check if user exists
   */
  let userExists = await User.findOne({
    $or: [{ email }, { phoneNumber }],
  }).select("password");

  if (userExists && (await userExists.matchPassword(password))) {
    let user = await User.findOne({ $or: [{ email }, { phoneNumber }] })
      .select("-password -refreshToken -__v")
      .lean();

    /*
     * @Description: Generate access token and refresh token
     */
    let accessToken = await getAccessToken(user);
    let refreshToken = await getRefreshToken(user);

    /*
     * @Description: Set refresh token in user
     */
    await User.findOneAndUpdate(
      { $or: [{ email }, { phoneNumber }] },
      { refreshToken }
    );

    /*
     * @Description: Set token in cookie
     */
    res.cookie("accessToken", `Bearer ${accessToken}`, {
      httpOnly: true,
      sameSite: "strict",
      path: "/",
      sameSite: true,
      expires: new Date(
        Date.now() + parseInt(process.env.ACCESS_COOKIE_EXPIRES_IN)
      ),
      secure: process.env.NODE_ENV === "production" ? true : false,
    });

    res.json({
      isSuccess: true,
      data: {
        isLoggedIn: true,
        accessToken,
        refreshToken,
      },
    });
  } else {
    res.status(404);
    throw new Error("Authentication failed !");
  }
});

module.exports = loginController;
