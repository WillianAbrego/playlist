const express = require("express");
const bodyParser = require("body-parser");

// create express app
const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  // Add this
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, POST, PATCH, DELETE, OPTIONS"
    );
    res.header("Access-Control-Max-Age", 120);
    return res.status(200).json({});
  }

  next();
});
// Setup server port
const port = process.env.PORT || 3000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Require employee routes
// Require artistRoute routes
//const employeeRoutes = require("./src/routes/employee.routes");
const artistRoute = require("./src/routes/artist.routes");
const albumRoute = require("./src/routes/album.routes");
const cancionRoute = require("./src/routes/cancion.routes");
// using as middleware
//app.use("/api/v1/artista", employeeRoutes);
app.use("/api/v1/artista", artistRoute);
app.use("/api/v1/album", albumRoute);
app.use("/api/v1/cancion", cancionRoute);
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
