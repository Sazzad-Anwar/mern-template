const multer = require("multer");
const { join, extname } = require("path");
const { v4: uuidV4 } = require("uuid");
const sharp = require("sharp");
const { existsSync, mkdirSync, unlinkSync } = require("fs");

/*
 * Description: Multer storage and file checking configurations
 */

const checkFileType = (file, cb) => {
  const filetypes = /jpg|jpeg|png|JPG|JPEG|PNG|GIF/;
  const extname = filetypes.test(extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error(`Only ${filetypes} images can be uploaded`));
  }
};

/*
 * Description: Check the uploading file is image or not
 */

const isImage = (file) => {
  const filetypes = /jpg|jpeg|png|JPG|JPEG|PNG|GIF/;
  const extname = filetypes.test(extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) return true;
  else return false;
};

/*
 * Description: Set up the uploading storage in server
 */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //Initialize the upload folder directory
    let dir = join(__dirname, "../public/uploads/");

    //Check if the path exists
    if (!existsSync(dir)) {
      //If not exists then make the directory
      let makeFolder = new Promise((resolve, reject) => {
        mkdirSync(dir, { recursive: true });
        resolve(true);
      });

      //Just right afer the make folder promise resolved then call the callback
      makeFolder.then(() => {
        cb(null, dir);
      });
    } else {
      cb(null, dir);
    }
  },
  filename: async function (req, file, cb) {
    let fileExt = extname(file.originalname);
    let fileName = uuidV4() + fileExt;
    cb(null, fileName);
  },
});

/*
 * Description: Upload function to upload the image
 */
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

/*
 * Description: Compress the image and make the image on .webp format and return the image details
 */

const imageCompress = async (file, height, width) => {
  let compressedFile = file.filename.split(extname(file.filename))[0] + ".webp";
  let image = await sharp(join(__dirname, "../public/uploads/", file.filename))
    .resize(height, width)
    .webp({ quality: 50 })
    .toFile(join(__dirname, "../public/uploads/", compressedFile));
  if (image) {
    unlinkSync(join(__dirname, "../public/uploads/", `${file.filename}`));
  }

  return {
    fileName: "/uploads/" + compressedFile,
    width: image.width,
    height: image.height,
    size:
      image.size / 1024 > 999
        ? (image.size / 1024 / 1024).toFixed(2) + " MB"
        : (image.size / 1024).toFixed(2) + " KB",
  };
};

module.exports = {
  upload,
  imageCompress,
  isImage,
};
