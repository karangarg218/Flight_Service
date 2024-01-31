const { AirportService } = require("../services");
const { StatusCodes } = require("http-status-codes");

async function createAirport(req, res) {
  try {
    const airport = await AirportService.createAirport({
      name: req.body.name,
      code: req.body.code,
      address: req.body.address,
      cityId: req.body.cityId,
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully create the airport",
      data: airport,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Somezthing went wrong while creating the airport",
      data: {},
      error: error,
    });
  }
}

async function getAirports(req, res) {
  try {
    const airports = await AirportService.getAirports();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched all the airports",
      data: airports,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while fetching the airports",
      data: {},
      error: error,
    });
  }
}
async function getAirport(req, res) {
  try {
    const airport = await AirportService.getAirport(req.params.id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched the airport",
      data: airport,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while fetching the airport",
      data: {},
      error: error,
    });
  }
}
async function destroyAirport(req, res) {
  try {
    const response = await AirportService.destroyAirport(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully deleted the airport",
      data: response,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while deleting the airport",
      data: {},
      error: error,
    });
  }
}
module.exports = {
  createAirport,
  destroyAirport,
  getAirport,
  getAirports,
};
