const { CityService } = require("../services");

const { StatusCodes } = require("http-status-codes");
/**
 * POST : /airplanes
 * req-body {modelNumber:'airbus390',capacity:300}
 */
async function createCity(req, res) {
  try {
    console.log(req.body);
    const city = await CityService.createCity({
      name: req.body.name,
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created the city",
      data: city,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while creating the city",
      data: {},
      error: error,
    });
  }
}

async function getCities(req, res) {
  try {
    const cities = await CityService.getCity();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched all the cities",
      data: cities,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while fetching the cities",
      data: {},
      error: error,
    });
  }
}
async function getCity(req, res) {
  try {
    const cites = await CityService.getCities(req.params.id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched the cities",
      data: cites,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while fetching the city",
      data: {},
      error: error,
    });
  }
}
async function destroyCity(req, res) {
  try {
    const response = await CityService.destroycity(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully deleted the city",
      data: response,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while deleting the city",
      data: {},
      error: error,
    });
  }
}
module.exports = {
  createCity,
  destroyCity,
  getCities,
  getCity,
};
