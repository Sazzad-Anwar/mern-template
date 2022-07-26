/*
* * @Description: Get all categories
* * @Route: /api/v1/categories
* * @Method: GET
! * @Access: Public
*/

const expressAsyncHandler = require("express-async-handler");
const queryArray = require("../../../libs/getQueryArray");
const Category = require("../../../models/category");

const getAllCategories = expressAsyncHandler(async (req, res) => {
  let categories = await Category.find({})
    .select("-createdAt -updatedAt -__v")
    .lean();

  res.status(200).json({
    status: "success",
    data: categories,
  });
});

module.exports = getAllCategories;
