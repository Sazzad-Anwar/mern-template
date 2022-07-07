const { imageCompress, isImage } = require("../Middleware/MulterMiddleware");

/*
 *  Description: Upload file controller
 */
const uploadFile = asyncHandler(async (req, res) => {
  try {
    const files = req.files;
    let uploads = [];

    const uploadPromise = new Promise(async (resolve, reject) => {
      for (let i in files) {
        if (isImage(files[i])) {
          let image = await imageCompress(files[i], 1920, 874);
          uploads.push(image);
        } else {
          uploads.push({
            file: "/uploads/" + files[i].filename,
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
      res.status(201).json({ uploadedFiles: values });
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  uploadFile,
};
