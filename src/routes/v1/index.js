const express = require("express");

const { InfoController } = require("../../controllers");
const AirplaneRoutes = require("./airplane-routes");
const CityRoute = require("./city-route");
const AirportRoute = require("./airport-routes");
const router = express.Router();

router.use("/airplanes", AirplaneRoutes);
router.use("/cities", CityRoute);
router.use("/airports", AirportRoute);
router.get("/info", InfoController.info);

module.exports = router;
