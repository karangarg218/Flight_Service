const { CityRepository } = require("../repositories");
const cityRepository = new CityRepository();
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");

async function createCity(data) {
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {
    if (error.name == "SequelizeValidateError") {
      let explanation = [];
      error.errors,
        forEach((err) => {
          explanation.push(err.message);
        });
    }
    throw new AppError(
      `Cannot create a new City object `,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getCity() {
  try {
    const city = await cityRepository.getAll();
    return city;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "cannot fetch data of the cites",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function getCities(id) {
  try {
    const city = await cityRepository.get(id);
    return city;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        `The city you requested is not present`,
        StatusCodes.NOT_FOUND
      );
    }
    throw new AppError(
      `cannot fetch city with id ${id}`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroycity(id) {
  try {
    const response = await cityRepository.destroy(id);
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        `The city you requested is not present`,
        StatusCodes.NOT_FOUND
      );
    }
    throw new AppError(
      `Unable to delete the city`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createCity,
  getCity,
  getCities,
  destroycity,
};
