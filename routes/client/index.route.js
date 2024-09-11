import productRoutes from "./products.route.js";
import homeRoutes from "./home.route.js";

function routeClient(app) {
  // Route for the home page
  app.use("/home" , homeRoutes);

  // Use the product routes for the "/products" path
  app.use("/products", productRoutes); // Connect product routes
}

export default routeClient;
