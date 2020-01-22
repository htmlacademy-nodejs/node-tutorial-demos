'use strict';

const express = require(`express`);
const multer = require(`multer`);
const {nanoid} = require(`nanoid`);
const path = require(`path`);

const PORT = 3000;
const PUBLIC_DIR = `public`;
const UPLOAD_DIR = path.join(__dirname, `public/images`);

const MimeTypeExtension = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
}

// Подготовка хранилища для сохранения файлов
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, UPLOAD_DIR),
    filename: (req, file, cb) => {
        const fileExtention = MimeTypeExtension[file.mimetype];
        cb(null, `${nanoid()}.${fileExtention}`)
    },
});

// Функция определяет допустимые файлы для загрузки
const fileFilter = (req, file, cb) => {
    const allowTypes = Object.keys(MimeTypeExtension);
    const isValid = allowTypes.includes(file.mimetype);
    cb(null, isValid);
}

const upload = multer({ storage, fileFilter, limits: {
    fileSize: 5 * 1024 * 1024
 }
});

const app = express();

app.use(express.static(PUBLIC_DIR));
app.post(`/upload`, upload.single(`avatar`), (req, res) => {
    const {file} = req;

    // В file вся необходимая информация о файле
    console.log(file);
    res.redirect(`/`);
});

app.listen(PORT);
