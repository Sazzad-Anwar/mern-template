const multer = require("multer");
const { join, extname } = require("path");
const { v4: uuidV4 } = require("uuid");
const { existsSync, mkdirSync } = require("fs");
const Folder = require("../models/folder");

/*
 * Description: Multer storage and file checking configurations
 */

let filetypes = /jpg|jpeg|png|JPG|JPEG|PNG|GIF|svg/;

const checkFileType = (file, cb) => {
  const fileExtName = filetypes.test(extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (fileExtName && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error(`Only ${filetypes} images can be uploaded`));
  }
};

/*
 * Description: Check the uploading file is image or not
 */

const isImage = (file) => {
  const fileExtName = filetypes.test(extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (fileExtName && mimetype) return true;
  else return false;
};

/*
 * Description: Set up the uploading storage in server
 */
const storage = multer.diskStorage({
  destination: async function (req, file, cb) {
    try {
      let folder = await Folder.findById(req.query.folderId);

      //Initialize the upload folder directory
      let dir = join(__dirname, `../public/uploads/${folder.name}`);

      //Check if the path exists
      if (folder && !existsSync(dir)) {
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
    } catch (error) {
      console.log(error);
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

module.exports = {
  upload,
  isImage,
};
