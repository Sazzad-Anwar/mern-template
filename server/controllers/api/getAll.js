/*
* * @Description: Get all api route for role management
* * @Route: /api/v1/api
* * @Method: GET
! * @Access: Super Admin
*/

const API = require("../../models/apiRoutes");
const expressAsyncHandler = require("express-async-handler");

const getAPI = expressAsyncHandler(async (req, res) => {
  let api = await API.find().select("-__v");
  res.json({
    status: "success",
    data: api,
  });
});

module.exports = getAPI;
