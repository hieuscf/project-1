import * as paths from "../../../routes/client/path/product-paths.js";

export const productIndexController = (req, res) => {
  res.render(paths.products); // Render products/index.pug from the views folder
};

export const productsIndexCreate = (req, res) => {
  res.render(paths.productsIndexCreate); // Render products/index.pug from the views folder
};

export const productsIndexConvert = (req, res) => {
  res.render(paths.productsIndexConvert); // Render products/index.pug from the views folder
};

export const productsIndexDelete = (req, res) => {
  res.render(paths.productsIndexDelete); // Render products/index.pug from the views folder
};