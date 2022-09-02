export const getHome = (req, res) => {
  return res.render("index", { pageTitle: "Home" });
};

export const getTrending = (req, res) => {
  return res.render("about", { pageTitle: "Trending" });
};

export const getNew = (req, res) => {
  return res.render("contact", { pageTitle: "NEW" });
};

export const getLogin = (req, res) => {
  return res.render("login", { pageTitle: "login" });
};
export const getJoin = (req, res) => {
  return res.send("join");
};
