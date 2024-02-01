const { FlightRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");
const { Op } = require("sequelize");
const flightRepository = new FlightRepository();
async function createFlight(data) {
  try {
    const flight = await flightRepository.create(data);
    return flight;
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError("cannot create a new flight", StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create flight ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function getAllFlights(query) {
  let customFilter = {};
  let sortFilter = [];
  const nextDate = query.tripDate + " 23:59:00";
  console.log(nextDate);
  //trip = num-dev
  if (query.trips) {
    console.log(`inside this`);
    const [departureAirportId, arrivalAirportId] = query.trips.split("-");
    customFilter.departureAirportId = departureAirportId;
    customFilter.arrivalAirportId = arrivalAirportId;
    console.log(`custome filet ${departureAirportId}`);
    //TODO: add check that they are not same
  }
  if (query.sort) {
    // eg:departime_Asc,price_DSC
    const params = query.sort.split(",");
    console.log(params);
    const sortFilters = params.map((item) => {
      return item.split("_");
    });
    console.log(sortFilters);
    sortFilter = sortFilters;
  }
  if (query.price) {
    [minPrice, maxPrice] = query.price.split("-");
    customFilter.price = {
      [Op.between]: [minPrice, maxPrice],
    };
  }

  if (query.travellers) {
    customFilter.totalSeats = {
      [Op.gte]: query.travellers,
    };
  }

  if (query.tripDate) {
    customFilter.departureTime = {
      [Op.between]: [query.tripDate, nextDate],
    };
  }
  try {
    const flights = await flightRepository.getAllFlights(
      customFilter,
      sortFilter
    );
    console.log(flights);
    return flights;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Cannot fetch the data of all flights",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  getAllFlights,
  createFlight,
};
