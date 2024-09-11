import express from "express";
import * as paths from "./path/product-paths.js";

// Create a new router for product routes
const productRoutes = express.Router();

// Route for the products page
productRoutes.get("/", (req, res) => {
  res.render( paths.products ); // Render products/index.pug from the views folder
});
productRoutes.post("/", (req, res) => {
  res.render(paths.productsIndexCreate); // Render products/index.pug from the views folder
});
productRoutes.patch("/", (req, res) => {
  res.render(paths.productsIndexConvert); // Render products/index.pug from the views folder
});
productRoutes.delete("/", (req, res) => {
  res.render(paths.productsIndexDelete); // Render products/index.pug from the views folder
});
export default productRoutes;
