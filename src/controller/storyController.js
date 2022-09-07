export const getWatchStory = (req, res) => {
  const id = req.params.id;
  console.log(id);
  return res.render("story/watch", { pageTitle: "WATCH", url: id });
};
export const getEditStory = (req, res) => {
  return res.render("story/edit-stories.", { pageTitle: "EDIT STORY" });
};
export const getDeleteStory = (req, res) => {
  return res.render("story/delete-stories", { pageTitle: "DELETE STORY" });
};
