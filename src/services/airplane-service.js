const { AirplaneRepository } = require("../repositories");
const airplaneRepository = new AirplaneRepository();
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    if (error.name == "SequelizeValidateError") {
      let explanation = [];
      error.errors,
        forEach((err) => {
          explanation.push(err.message);
        });
    }
    throw new AppError(
      `Cannot create a new Airplane object `,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "cannot fetch data of the airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function getAirplane(id) {
  try {
    const airplane = await airplaneRepository.get(id);
    return airplane;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        `The Airplane you requested is not present`,
        StatusCodes.NOT_FOUND
      );
    }
    throw new AppError(
      `cannot fetch airplane with id ${id}`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyAirplane(id) {
  try {
    const response = await airplaneRepository.destroy(id);
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        `The Airplane you requested is not present`,
        StatusCodes.NOT_FOUND
      );
    }
    throw new AppError(
      `Unable to delete the airplane`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
};
