/*
* * @Description: Get all categories
* * @Route: /api/v1/categories/:id
* * @Method: GET
! * @Access: Public
*/

const expressAsyncHandler = require("express-async-handler");
const Category = require("../../../models/category");

const getCategoryById = expressAsyncHandler(async (req, res) => {
  let { id } = req.params;
  let { q } = req.query;

  let category = await Category.findById(id)
    .select("-createdAt -updatedAt -__v")
    .lean();

  if (category) {
    if (q === "getParent") {
      let parent = await Category.findOne({ children: category.name })
        .select("-createdAt -updatedAt -__v")
        .lean();
      res.status(200).json({
        status: "success",
        data: parent,
      });
    } else {
      res.status(200).json({
        status: "success",
        data: category,
      });
    }
  } else {
    res.status(404).json({
      status: "failed",
      message: "Category not found",
    });
  }
});

module.exports = getCategoryById;
