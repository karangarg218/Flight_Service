"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currentDate = new Date();

    const citiesData = [
      { name: "New York", createdAt: currentDate, updatedAt: currentDate },
      { name: "London", createdAt: currentDate, updatedAt: currentDate },
      { name: "Tokyo", createdAt: currentDate, updatedAt: currentDate },
      { name: "Paris", createdAt: currentDate, updatedAt: currentDate },
      { name: "Los Angeles", createdAt: currentDate, updatedAt: currentDate },
      { name: "Sydney", createdAt: currentDate, updatedAt: currentDate },
      { name: "Beijing", createdAt: currentDate, updatedAt: currentDate },
      { name: "Dubai", createdAt: currentDate, updatedAt: currentDate },
      { name: "Singapore", createdAt: currentDate, updatedAt: currentDate },
      { name: "Istanbul", createdAt: currentDate, updatedAt: currentDate },
      // Add more cities as needed
    ];

    await queryInterface.bulkInsert("Cities", citiesData, {
      returning: ["id", "name", "createdAt", "updatedAt"],
    });

    const airportsData = [
      {
        id: 1,
        name: "John F. Kennedy International Airport",
        code: "JFK",
        address: "New York, USA",
        cityId: 1,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        id: 2,
        name: "Heathrow Airport",
        code: "LHR",
        address: "London, UK",
        cityId: 2,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        id: 3,
        name: "Narita International Airport",
        code: "NRT",
        address: "Tokyo, Japan",
        cityId: 3,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        id: 4,
        name: "Charles de Gaulle Airport",
        code: "CDG",
        address: "Paris, France",
        cityId: 4,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        id: 5,
        name: "Los Angeles International Airport",
        code: "LAX",
        address: "Los Angeles, USA",
        cityId: 5,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        id: 6,
        name: "Sydney Kingsford Smith Airport",
        code: "SYD",
        address: "Sydney, Australia",
        cityId: 6,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        id: 7,
        name: "Beijing Capital International Airport",
        code: "PEK",
        address: "Beijing, China",
        cityId: 7,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        id: 8,
        name: "Dubai International Airport",
        code: "DXB",
        address: "Dubai, UAE",
        cityId: 8,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        id: 9,
        name: "Singapore Changi Airport",
        code: "SIN",
        address: "Singapore",
        cityId: 9,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        id: 10,
        name: "Istanbul Airport",
        code: "IST",
        address: "Istanbul, Turkey",
        cityId: 10,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      // Add more airports as needed
    ];

    await queryInterface.bulkInsert("Airports", airportsData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cities", null, {});
    await queryInterface.bulkDelete("Airports", null, {});
  },
};
