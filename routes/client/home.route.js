import express from "express";
import { home } from "./path/home.js";

// Create a new router for product routes
const homeRoutes = express.Router();

// Route for the products page
homeRoutes.get("/", (req, res) => {
  res.render(home); // Render products/index.pug from the views folder
});

export default homeRoutes;
