import express from "express";
import path from "path";
import  routeClient  from "./routes/client/index.route.js";

const app = express();
const port = 3000;


app.set("views", path.join( "" , "views"));
//app.set("views", "/views");
// Đặt template engine là Pug
app.set("view engine", "pug");

routeClient(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); 
});
