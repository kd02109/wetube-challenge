export const home = (req, res) => {
  return res.render("index", { pageTitle: "Home" });
};

export const about = (req, res) => {
  return res.render("about", { pageTitle: "about" });
};

export const contact = (req, res) => {
  return res.render("contact", { pageTitle: "contact" });
};

export const login = (req, res) => {
  return res.render("login", { pageTitle: "login" });
};
