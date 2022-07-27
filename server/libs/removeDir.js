const fs = require("fs");
const { join } = require("path");

const removeDir = (name) => {
  let dir = join(__dirname, `../public/uploads/${name}`);

  try {
    fs.rm(dir, { recursive: true }, () => {
      console.log(`Folder ${name} is deleted`);
    });
  } catch (error) {
    return { isSuccess: false, message: error.message };
  }
};

module.exports = removeDir;
