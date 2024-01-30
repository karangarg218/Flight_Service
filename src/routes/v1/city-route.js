const express = require("express");
const router = express.Router();
const { CityController } = require("../../controllers/");

router.post("/", CityController.createCity);
router.get("/", CityController.getCities);
router.get("/:id", CityController.getCity);
router.delete("/:id", CityController.destroyCity);

module.exports = router;
