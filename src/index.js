const express = require("express");

const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
  const { Airport, City } = require("./models");
  const cities = await City.findAll();
  console.log(cities);
  const airports = Airport.create({
    name:"karan airport",
    code:"kdr",
    cityId:'1'
  });
});
