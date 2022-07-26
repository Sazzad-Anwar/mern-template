const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const folderSchema = new Schema(
  {
    name: { type: String, required: true, index: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Folder", folderSchema);
