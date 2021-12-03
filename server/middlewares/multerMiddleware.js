const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const sharp = require('sharp');
const fs = require('fs');

//@Description: Multer storage and file checking configurations
const checkFileType = (file, cb) => {
    const filetypes = /jpg|jpeg|png|JPG|JPEG|PNG|GIF/
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true)
    } else {
        cb(new Error(`Only ${filetypes} images can be uploaded`));
    }
};

const isImage = (file) => {
    const filetypes = /jpg|jpeg|png|JPG|JPEG|PNG|GIF/
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) return true;
    else return false;
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        //Initialize the upload folder directory
        let dir = path.join(__dirname, '../public/uploads/');

        //Check if the path exists
        if (!fs.existsSync(dir)) {

            //If not exists then make the directory
            let makeFolder = new Promise((resolve, reject) => {
                fs.mkdirSync((dir), { recursive: true });
                resolve(true);
            })

            //Just right afer the make folder promise resolved then call the callback
            makeFolder.then(() => {
                cb(null, dir)
            })
        } else {
            cb(null, dir)
        }
    },
    filename: async function (req, file, cb) {
        let fileExt = path.extname(file.originalname);
        let fileName = uuidv4() + fileExt;
        cb(null, fileName);
    },
});

const upload = multer({
    storage: storage,
    // fileFilter: function (req, file, cb) {
    //     checkFileType(file, cb)
    // }
});

const imageCompress = async (file, height, width) => {
    let compressedFile = file.filename.split(path.extname(file.filename))[0] + '.webp';
    let image = await sharp(path.join(__dirname, '../public/uploads/', file.filename))
        .resize(height, width)
        .webp({ quality: 50 }).toFile(path.join(__dirname, '../public/uploads/', compressedFile));
    if (image) {
        fs.unlinkSync(path.join(__dirname, '../public/uploads/', `${file.filename}`));
    }

    return {
        fileName: '/uploads/' + compressedFile,
        width: image.width,
        height: image.height,
        size: (image.size / 1024) > 999 ? ((image.size / 1024) / 1024).toFixed(2) + ' MB' : (image.size / 1024).toFixed(2) + ' KB'
    };

}

module.exports = {
    upload,
    imageCompress,
    isImage
}