const { FlightService } = require("../services");
const { StatusCodes } = require("http-status-codes");

async function getAllFlights(req, res) {
  try {
    console.log(req.query);
    const flights = await FlightService.getAllFlights(req.query);
    console.log(flights);
    return res.status(StatusCodes.OK).json({
      success: true,
      data: flights,
      error: {},
    });
  } catch (error) {
    return res.status(error.statusCode).json({
      success: false,
      data: {},
      error: error,
    });
  }
}

module.exports = { getAllFlights };
