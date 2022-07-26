/*
* * @Description: Get all categories
* * @Route: /api/v1/categories/:id
* * @Method: PUT
! * @Access: SuperAdmin
*/

const expressAsyncHandler = require("express-async-handler");
const Category = require("../../../models/category");
const categoryRequestVariables = require("../../../utils/InputValidation/category");

const updateCategory = expressAsyncHandler(async (req, res) => {
  let { id } = req.params;

  let { name, parent, isActive, image } =
    await categoryRequestVariables.validateAsync(req.body);

  let category = await Category.findById(id);

  if (parent) {
    let foundParent = await Category.findOne({ name: parent.toLowerCase() });
    if (foundParent && category) {
      foundParent.children = foundParent.children.filter(
        (childName) => childName !== category.name
      );
      foundParent.children.push(name);
      await foundParent.save();
      category.name = name ?? category.name;
      category.image = image ?? category.image;
      let updatedCategory = await category.save();

      res.status(200).json({
        status: "success",
        data: updatedCategory,
      });
    }
  } else if (!parent && category) {
    category.name = name ?? category.name;
    category.image = image ?? category.image;
    let updatedCategory = await category.save();

    res.status(200).json({
      status: "success",
      data: updatedCategory,
    });
  } else {
    res.status(400).json({
      status: "failed",
      message: "Category does not exist",
    });
  }
});

module.exports = updateCategory;
