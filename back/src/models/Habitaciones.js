const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("Habitaciones", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    servico: {
      type: DataTypes.JSONB,
      defaultValue: [],
    },
  });
};
