const express = require("express");
const router = express.Router();
const { FlightController } = require("../../controllers");

///router.post("/", AirportController.createAirport);
router.get("/", FlightController.getAllFlights);
module.exports = router;
