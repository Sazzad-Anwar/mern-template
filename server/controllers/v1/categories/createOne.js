/*
* * @Description: Create a new category
* * @Route: /api/v1/categories
* * @Method: POST
! * @Access: SuperAdmin
*/

const expressAsyncHandler = require("express-async-handler");
const Category = require("../../../models/category");
const categoryRequestVariables = require("../../../utils/InputValidation/category");

const createCategory = expressAsyncHandler(async (req, res) => {
  const { name, parent, image, isActive } =
    await categoryRequestVariables.validateAsync(req.body);

  let isExist = await Category.findOne({ name: name.toLowerCase() }).lean();
  let foundParent = await Category.findOne({ name: parent });

  if (isExist) {
    res.status(400).json({
      status: "failed",
      message: "Category already exists",
    });
  } else {
    let newCategory = new Category({
      name: name.toLowerCase(),
      image,
      isActive,
    });

    if (foundParent && !foundParent.children.includes(name)) {
      foundParent.children.push(name.toLowerCase());
      await foundParent.save();
    }

    await newCategory.save();
    res.status(201).json({
      status: "success",
      data: newCategory,
    });
  }
});

module.exports = createCategory;
