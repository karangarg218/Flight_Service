"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currentDate = new Date();

    const airplanesData = [
      {
        modelNumber: "Boeing 747",
        capacity: 660,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        modelNumber: "Airbus A380",
        capacity: 853,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        modelNumber: "Boeing 777",
        capacity: 396,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        modelNumber: "Airbus A320",
        capacity: 240,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        modelNumber: "Boeing 737",
        capacity: 230,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        modelNumber: "Embraer E190",
        capacity: 114,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        modelNumber: "Bombardier CRJ900",
        capacity: 76,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        modelNumber: "Airbus A330",
        capacity: 440,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        modelNumber: "Boeing 787 Dreamliner",
        capacity: 290,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        modelNumber: "Airbus A350",
        capacity: 440,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        modelNumber: "Boeing 767",
        capacity: 375,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        modelNumber: "Embraer E145",
        capacity: 50,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        modelNumber: "Airbus A340",
        capacity: 375,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        modelNumber: "Boeing 757",
        capacity: 239,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        modelNumber: "Bombardier Q400",
        capacity: 90,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        modelNumber: "McDonnell Douglas MD-80",
        capacity: 172,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        modelNumber: "Airbus A319",
        capacity: 160,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        modelNumber: "Boeing 717",
        capacity: 110,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        modelNumber: "Embraer E170",
        capacity: 78,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        modelNumber: "Airbus A321",
        capacity: 240,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      // Add more airplanes as needed
    ];

    await queryInterface.bulkInsert("Airplanes", airplanesData, {});
  },

  async down(queryInterface, Sequelize) {},
};
