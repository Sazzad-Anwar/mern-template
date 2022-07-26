/*
* * @Description: Get all api route for role management
* * @Route: /api/v1/api/app-config
* * @Method: GET
! * @Access: Super Admin
*/

const expressAsyncHandler = require("express-async-handler");
const App = require("../../../models/appConfig");

const getAppConfig = expressAsyncHandler(async (req, res) => {
  let appConfig = await App.find({})
    .select("-createdAt -updatedAt -__v")
    .lean();

  res.status(200).json({
    status: "success",
    data: appConfig,
  });
});

module.exports = getAppConfig;
