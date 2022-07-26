/*
* * @Description: Get all api route for locations
* * @Route: /api/v1/api/locations
* * @Method: GET
! * @Access: Public
*/

const expressAsyncHandler = require("express-async-handler");
const divisions = require("./divisions.json");
// const districts = require("./districts.json");
// const unions = require('./unions.json');
// const upazilas = require('./upzilas.json');

const getAllLocations = expressAsyncHandler(async (req, res) => {
  res.json({
    status: "success",
    data: divisions,
  });
});

module.exports = getAllLocations;
