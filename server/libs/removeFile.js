const { readFileSync, unlinkSync } = require("fs");
const { join } = require("path");

const removeFile = (fileLink) => {
  let dir = join(__dirname, `../public/${fileLink}`);

  try {
    let files = readFileSync(dir);

    if (files) {
      unlinkSync(dir);
      return { isSuccess: true, message: "file has been removed" };
    } else {
      return { isSuccess: false, message: "file link is invalid" };
    }
  } catch (error) {
    return { isSuccess: false, message: error.message };
  }
};

module.exports = removeFile;
