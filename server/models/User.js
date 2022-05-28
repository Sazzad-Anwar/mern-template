const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: [true, "Name is required"], index: true },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already exits"],
      index: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      unique: [true, "Email already exits"],
      index: true,
    },
    password: { type: String, required: [true, "Password is required"] },
    role: [
      {
        type: String,
        required: [true, "Role is required"],
        default: "user",
      },
    ],
    isActive: { type: Boolean, default: false },
    refreshToken: { type: String, default: "" },
    avatarUrl: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  } else {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
