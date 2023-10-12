/* eslint-disable no-unused-vars */
import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const initBicycle = (sequelize, Types) => {
  class Bicycle extends Model { }
  Bicycle.init(
    {
      brand: Types.STRING,
      model: Types.STRING
    },
    {
      sequelize,
      modelName: "Bicycle",
      tableName: 'bicycles',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );

  return Bicycle;
};

export default initBicycle(connection, DataTypes);