import express from "express";
import path from "path";
import  routeClient  from "./routes/client/index.route.js";
import dotenv from "dotenv"; 

dotenv.config();

const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT;

app.set("views", path.join( "" , "views"));
//app.set("views", "/views");
// Đặt template engine là Pug
app.set("view engine", "pug");

routeClient(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); 
});
