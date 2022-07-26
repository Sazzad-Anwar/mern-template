const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appConfigSchema = new Schema(
  {
    name: { type: String, required: [true, "App name is required"] },
    logo: { type: String, required: [true, "App logo is required"] },
    motto: { type: String },
    image: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AppConfig", appConfigSchema);
