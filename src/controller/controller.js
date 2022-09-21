import fs from "fs";
export const getHome = (req, res) => {
  fs.readdir("texts", (err, files) => {
    try {
      return res.render("home", { files });
    } catch (err) {
      return res.status(400).render("home", { errorMessage: "Error" });
    }
  });
};
export const postHome = (req, res) => {
  const { file } = req;
  console.log(file);
  fs.readFile(`texts/${file}`, "utf8", (err, data) => {
    try {
      fs.readdir("texts", (err, files) => {
        //texts 폴더 안 파일 다시 읽기 (비동기로 하면 참 좋을텐ㄷ.....ㅔ)
        return res.render("home", { data, files });
      });
    } catch (err) {
      return res.status(400).render("home", { errorMessage: "Error" });
    }
  });
};
export const getRead = (req, res) => {
  const { id } = req.params;
  console.log(id);
  fs.readFile(`texts/${id}`, "utf8", (err, data) => {
    try {
      console.log(data);
      return res.render("read", { data });
    } catch (err) {
      return res.status(400).render("read", { errorMessage: "Error" });
    }
  });
};
