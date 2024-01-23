// Learning BackEnd;
const express = require("express");
const app = express();
const port = 5000;
const path = "blog";

app.get(`/${path}`, (req, res) => {
  res.send("Learn BackEnd To NodeJs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`you can see at http://localhost:${port}/${path}`);
});
