const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("Server is Running...");
});

const port = 5000;
app.listen(port, console.log("Server is started at PORT: ", port));
