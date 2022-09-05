export const getHome = (req, res) => {
  return res.render("home", { pageTitle: "Home" });
};

export const getTrending = (req, res) => {
  return res.render("story/trending", { pageTitle: "TRENDING" });
};

export const getNew = (req, res) => {
  return res.render("story/new-stories", { pageTitle: "NEW STORY" });
};

export const getLogin = (req, res) => {
  return res.render("user/login", { pageTitle: "LOGIN" });
};
export const getJoin = (req, res) => {
  return res.render("user/join", { pageTitle: "JOIN" });
};
