import express from "express";
import path from "path";

const app = express();
const port = 3000;


app.set("views", path.join( "" , "views"));
//app.set("views", "/views");
// Đặt template engine là Pug
app.set("view engine", "pug");

//main
app.get("/", (req, res) => {
  res.render("client/pages/home/index"); 
});


app.get("/products", (req, res) => {
  res.render("client/pages/products/index"); 
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
