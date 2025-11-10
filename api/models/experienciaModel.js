import { DataTypes } from "sequelize";

// Modelo Experiência — guarda empresa, cargo e depois o foreign key é adicionado via associação
export default (sequelize) => {
  const Experiencia = sequelize.define("Experiencia", {
    empresa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cargo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Experiencia;
};
