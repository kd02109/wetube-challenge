export const getProfile = (req, res) => {
  const { id } = req.params;
  console.log(id);
  return res.render("user/profile", { pageTitle: "PROFILE", id: id });
};
export const getUser = (req, res) => {
  const { id } = req.params;
  return res.render("user/user-list", { pageTitle: "USER" }, { id });
};

export const getEditProfile = (req, res) => {
  const { id } = req.params;
  return res.render("user/edit-user", { pageTitle: "EDIT PROFILE" }, { id });
};
