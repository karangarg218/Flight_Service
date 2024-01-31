const { AirportRepository } = require("../repositories");
const airportRepository = new AirportRepository();
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");

async function createAirport(data) {
  try {
    const airport = await airportRepository.create(data);
    return airport;
  } catch (error) {
    if (error.name == "SequelizeValidateError") {
      let explanation = [];
      error.errors,
        forEach((err) => {
          explanation.push(err.message);
        });
    }
    throw new AppError(
      `Cannot create a new Airport object `,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirports() {
  try {
    const airports = await airportRepository.getAll();
    return airports;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "cannot fetch data of the airports",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function getAirport(id) {
  try {
    const airport = await airportRepository.get(id);
    return airport;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        `The Airport you requested is not present`,
        StatusCodes.NOT_FOUND
      );
    }
    throw new AppError(
      `cannot fetch airport with id ${id}`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyAirport(id) {
  try {
    const response = await airportRepository.destroy(id);
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        `The Airport you requested is not present`,
        StatusCodes.NOT_FOUND
      );
    }
    throw new AppError(
      `Unable to delete the airport`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirport,
  getAirport,
  getAirports,
  destroyAirport,
};
