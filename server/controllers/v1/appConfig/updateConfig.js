/*
* * @Description: Get all api route for role management
* * @Route: /api/v1/api/app-config
* * @Method: PUT
! * @Access: Super Admin
*/

const expressAsyncHandler = require("express-async-handler");
const App = require("../../../models/appConfig");

const updateAppConfig = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, logo, motto, description, image } = req.body;

  let appConfig = await App.findById(id).select("-createdAt -updatedAt -__v");

  if (appConfig) {
    appConfig.name = name ?? appConfig.name;
    appConfig.logo = logo ?? appConfig.logo;
    appConfig.motto = motto ?? appConfig.motto;
    appConfig.description = description ?? appConfig.description;
    appConfig.image = image ?? appConfig.image;

    let updatedConfig = await appConfig.save();

    res.status(200).json({
      status: "success",
      data: updatedConfig,
    });
  } else {
    res.status(404).json({
      status: "failed",
      message: "App config does not exist",
    });
  }
});

module.exports = updateAppConfig;
