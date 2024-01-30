const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");
/**
 * POST : /airplanes
 * req-body {modelNumber:'airbus390',capacity:300}
 */
async function createAirplane(req, res) {
  try {
    console.log(req.body);
    const airplanes = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully create the airplane",
      data: airplanes,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while creating the airplane",
      data: {},
      error: error,
    });
  }
}

async function getAirplanes(req, res) {
  try {
    const airplanes = await AirplaneService.getAirplanes();
    console.log(airplanes);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched all the airplane",
      data: airplanes,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while fetching the airplanes",
      data: {},
      error: error,
    });
  }
}
async function getAirplane(req, res) {
  try {
    console.log(req.params.id);
    const airplane = await AirplaneService.getAirplane(req.params.id);
    console.log(airplane);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched the airplane",
      data: airplane,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while fetching the airplane",
      data: {},
      error: error,
    });
  }
}
async function destroyAirplane(req, res) {
  try {
    const response = await AirplaneService.destroyAirplane(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully deleted the airplane",
      data: response,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while deleting the airplane",
      data: {},
      error: error,
    });
  }
}
module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
};
