const express = require("express");
const path = require("path");

const app = express();

// Serve static files (audio, images, HTML, etc.)
app.use(express.static("public"));

// Correct paths to route files
const loginData = require("./routes/routes");
const routeRouter = require("./routes/app");

app.use(loginData);
app.use(routeRouter);

app.listen(5000, () => {
  console.log("Server Started on http://localhost:5000");
});
