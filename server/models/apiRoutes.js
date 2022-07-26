const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apiSchema = new Schema(
  {
    slug: {
      type: String,
      unique: true,
      required: [true, "Api slug is required"],
    },
    name: [{ type: String, required: [true, "Api name is required"] }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Api", apiSchema);
