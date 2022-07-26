/*
* * @Description: Create a new category
* * @Route: /api/v1/categories
* * @Method: POST
! * @Access: SuperAdmin
*/

const expressAsyncHandler = require("express-async-handler");
const Category = require("../../models/category");
const categoryRequestVariables = require("../../utils/InputValidation/category");

const createCategory = expressAsyncHandler(async (req, res) => {
  const { name, children, image } =
    await categoryRequestVariables.validateAsync(req.body);

  let isExist = await Category.findOne({ name }).lean();

  if (isExist) {
    res.status(400).json({
      status: "failed",
      message: "Category already exists",
    });
  } else {
    let newCategory = new Category({
      name: name.toLowerCase(),
      children: children?.map((child) => child.toLowerCase()),
      image,
    });
    await newCategory.save();
    res.status(201).json({
      status: "success",
      data: newCategory,
    });
  }
});

module.exports = createCategory;
