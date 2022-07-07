/*
* * @Description: Check session route for all user
* * @Route: /api/v1/auth/checkSession
* * @Method: GET
! * @Access: Admin, SuperAdmin, User
*/

const expressAsyncHandler = require("express-async-handler");

const checkSessionController = expressAsyncHandler(async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Session is valid",
  });
});

module.exports = checkSessionController;
