import express from "express";
import * as controllers from "../../server/controller/client/home.controller.js";

// Create a new router for product routes
const homeRoutes = express.Router();

// Route for the products page
homeRoutes.get("/", controllers.homeController); // Render products/index.pug from the views folder


export default homeRoutes;
