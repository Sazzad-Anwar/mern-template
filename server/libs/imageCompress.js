/*
 * Description: Compress the image and make the image on .webp format and return the image details
 */
const Upload = require("../models/uploads");
const sharp = require("sharp");
const { extname, join } = require("path");
const { unlinkSync } = require("fs");

const imageCompress = async (file, height, width, folder) => {
  try {
    let compressedFile =
      file.filename.split(extname(file.filename))[0] + ".jpeg";
    let dir = `../public/uploads/${folder.name}`;
    console.log(compressedFile);
    let image = await sharp(join(__dirname, dir, file.filename))
      .resize(height, width)
      .toFormat("jpeg", { mozjpeg: true, quality: 50 })
      .toFile(join(__dirname, dir, compressedFile));

    if (image) {
      unlinkSync(join(__dirname, dir, `${file.filename}`));
    }

    let uploadFile = new Upload({
      url: `/uploads/${folder.name}/${compressedFile}`,
      name: file.originalname.split(extname(file.filename))[0],
      folder: folder._id,
    });

    await uploadFile.save();

    return uploadFile;
  } catch (error) {
    console.log(error);
  }
};

module.exports = imageCompress;
