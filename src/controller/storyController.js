export const getWatchStory = (req, res) => {
  return res.render("story/watch", { pageTitle: "WATCH" });
};
export const getEditStory = (req, res) => {
  return res.render("story/edit-stories.", { pageTitle: "EDIT STORY" });
};
export const getDeleteStory = (req, res) => {
  return res.render("story/delete-stories", { pageTitle: "DELETE STORY" });
};
