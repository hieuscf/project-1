import * as paths from "../../../routes/client/path/home.js";

export const homeController = (req, res) => {
  res.render(paths.home , {
    pagesTitle: "Trang chu"
  }); // Render products/index.pug from the views folder
};