const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const uploadSchema = new Schema(
  {
    url: {
      type: String,
      required: [true, "File URL is required"],
      index: true,
    },
    name: {
      type: String,
      required: [true, "File name is required"],
      indexed: true,
    },
    folder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Folder",
      required: [true, "Folder ID is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Upload", uploadSchema);
