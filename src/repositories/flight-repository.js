const CrudRepository = require("./crud-repository");
const { Flight } = require("../models");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }
  async getAllFlights(filter, sort) {
    //recieve and object as filter
    const response = await Flight.findAll({
      where: filter,
      order: sort,
    });
    return response;
  }
}

module.exports = FlightRepository;
