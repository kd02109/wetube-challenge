import multer from "multer";
import fs from "fs";

try {
  fs.readdirSync("texts");
} catch (err) {
  console.error("texts 폴더가 없습니다. 폴더를 생성합니다.");
  fs.mkdirSync("texts");
}

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "texts/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const uploadText = multer({ storage: storage });
export default uploadText;
