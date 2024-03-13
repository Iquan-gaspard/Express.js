const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//port callback
app.listen(3000, () => {
  console.log("server is listen 3000");
});
