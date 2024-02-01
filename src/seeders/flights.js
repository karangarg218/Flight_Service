"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currentDate = new Date();
    const flightsData = [
      {
        flightNumber: "FL001",
        airplaneId: 1,
        departureAirportId: "JFK",
        arrivalAirportId: "LHR",
        arrivalTime: new Date(currentDate.getTime() + 86400000), // Next day
        departureTime: currentDate,
        price: 500,
        boardingGate: "A1",
        totalSeats: 150,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        flightNumber: "FL002",
        airplaneId: 2,
        departureAirportId: "NRT",
        arrivalAirportId: "CDG",
        arrivalTime: new Date(currentDate.getTime() + 172800000), // Next next day
        departureTime: new Date(currentDate.getTime() + 86400000), // Next day
        price: 600,
        boardingGate: "B2",
        totalSeats: 200,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        flightNumber: "FL003",
        airplaneId: 3,
        departureAirportId: "LAX",
        arrivalAirportId: "SYD",
        arrivalTime: new Date(currentDate.getTime() + 259200000), // Next next next day
        departureTime: new Date(currentDate.getTime() + 172800000), // Next next day
        price: 700,
        boardingGate: "C3",
        totalSeats: 180,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        flightNumber: "FL004",
        airplaneId: 4,
        departureAirportId: "PEK",
        arrivalAirportId: "DXB",
        arrivalTime: new Date(currentDate.getTime() + 345600000), // Next next next next day
        departureTime: new Date(currentDate.getTime() + 259200000), // Next next next day
        price: 800,
        boardingGate: "D4",
        totalSeats: 160,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        flightNumber: "FL005",
        airplaneId: 5,
        departureAirportId: "SIN",
        arrivalAirportId: "IST",
        arrivalTime: new Date(currentDate.getTime() + 432000000), // Next next next next next day
        departureTime: new Date(currentDate.getTime() + 345600000), // Next next next next day
        price: 900,
        boardingGate: "E5",
        totalSeats: 170,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      // Add more flights as needed
    ];

    await queryInterface.bulkInsert("Flights", flightsData, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
