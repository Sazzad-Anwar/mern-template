const uploadInputValidation = require("../../../utils/InputValidation/uploads");
const expressAsyncHandler = require("express-async-handler");
const { isImage } = require("../../../middlewares/multerMiddleware");
const Folder = require("../../../models/folder");
const { promisify } = require("util");
const { join } = require("path");
const imageCompress = require("../../../libs/imageCompress");
const sizeOf = promisify(require("image-size"));

/*
 *  Description: Upload file controller
 */
const uploadFile = expressAsyncHandler(async (req, res) => {
  const files = req.files;
  const { folderId } = await uploadInputValidation.validateAsync(req.query);

  let folder = await Folder.findById(folderId);

  let uploads = [];

  if (folder) {
    const uploadPromise = new Promise(async (resolve, reject) => {
      for (let i in files) {
        if (isImage(files[i])) {
          const imageDimension = await sizeOf(
            join(
              __dirname,
              `../../../public/uploads/${folder.name}/${files[i].filename}`
            )
          );

          let image = await imageCompress(
            files[i],
            imageDimension.width,
            imageDimension.height,
            folder
          );
          uploads.push(image);
        } else {
          uploads.push({
            file: `/uploads/${folder.name}/${files[i].filename}`,
            size:
              files[i].size / 1024 > 999
                ? (files[i].size / 1024 / 1024).toFixed(2) + " MB"
                : (files[i].size / 1024).toFixed(2) + " KB",
          });
        }
      }

      resolve(uploads);
    });

    uploadPromise.then((values) => {
      res.status(201).json({
        status: "success",
        data: values,
      });
    });
  } else {
    res.status(404).json({ message: "Folder not found" });
  }
});

module.exports = {
  uploadFile,
};
