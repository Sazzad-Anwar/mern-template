/*
* * @Description: Get all api route for role management
* * @Route: /api/v1/api/app-config
* * @Method: POST
! * @Access: Super Admin
*/

const expressAsyncHandler = require("express-async-handler");
const App = require("../../../models/appConfig");

const createAppConfig = expressAsyncHandler(async (req, res) => {
  const { name, logo, motto, description, image } = req.body;

  let newConfig = new App({
    name,
    logo,
    motto,
    description,
    image,
  });

  let appConfig = await newConfig.save();

  res.status(201).json({
    status: "success",
    data: appConfig,
  });
});

module.exports = createAppConfig;
