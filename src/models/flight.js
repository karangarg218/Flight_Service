"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    static associate(models) {
      this.belongsTo(models.Airplane, {
        foreignKey: "airplaneId",
      });
      this.belongsTo(models.Airport, {
        foreignKey: "departureAirportId",
      });

      this.belongsTo(models.Airport, {
        foreignKey: "arrivalAirportId",
      });
    }
  }
  Flight.init(
    {
      flightNumber: { type: DataTypes.STRING, allowNull: false },
      airplaneId: { type: DataTypes.INTEGER, allowNull: false },
      departureAirportId: { type: DataTypes.INTEGER, allowNull: false },
      arrivalAirportId: { type: DataTypes.INTEGER, allowNull: false },
      arrivalTime: { type: DataTypes.DATE, allowNull: false },
      departureTime: { type: DataTypes.DATE, allowNull: false },
      price: { type: DataTypes.INTEGER, allowNull: false },
      boardingGate: { type: DataTypes.STRING },
      totalSeats: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Flight",
    }
  );
  return Flight;
};