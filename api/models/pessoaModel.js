// Modelo Pessoa — simples: nome e email (podemos estender com telefone, etc.)
import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Pessoa = sequelize.define("Pessoa", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    ,
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  return Pessoa;
};
