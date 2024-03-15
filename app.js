const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("*", (req, res) => {
  res.status(404).send("error page");
});

//port callback
app.listen(3000, () => {
  console.log("server is listen 3000");
});
