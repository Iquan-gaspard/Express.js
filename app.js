const express = require("express");
const app = express();

//middlewares
app.use((req, res, next) => {
  console.log("passing middlewares");
  next();
});

app.use((req, res, next) => {
  console.log("passing second middlewares");
  next();
});

app.get("/", (req, res) => {
  res.send("welcome");
});

app.get("/example", (req, res) => {
  res.redirect("/actualexample");
});
//
//port callback
app.listen(3000, () => {
  console.log("server is listen 3000");
});
