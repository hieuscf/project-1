import express from "express";
import * as controllers from "../../server/controller/client/products.controller.js";

// Create a new router for product routes
const productRoutes = express.Router();

// Route for the products page
productRoutes.get("/", controllers.productIndexController);
productRoutes.post("/", controllers.productsIndexCreate);
productRoutes.patch("/", controllers.productsIndexConvert);
productRoutes.delete("/", controllers.productsIndexDelete);

export default productRoutes;
