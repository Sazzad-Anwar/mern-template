/*
* * @Description: Get all categories
* * @Route: /api/v1/categories/:id
* * @Method: DELETE
! * @Access: SuperAdmin
*/

const expressAsyncHandler = require("express-async-handler");
const Category = require("../../../models/category");

const deleteCategory = expressAsyncHandler(async (req, res) => {
  let { id } = req.params;

  await Category.findByIdAndDelete(id);

  res.status(200).json({
    status: "success",
    message: `Category with id ${id} deleted successfully`,
  });
});

module.exports = deleteCategory;
