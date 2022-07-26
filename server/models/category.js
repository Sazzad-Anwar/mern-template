const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apiSchema = new Schema(
  {
    name: { type: String, required: true, index: true, unique: true },
    children: [{ type: String, default: null, unique: true, index: true }],
    image: { type: String, default: null },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", apiSchema);
