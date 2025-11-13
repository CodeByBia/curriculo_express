import { DataTypes } from "sequelize";

// Modelo Pessoa — simples: nome, email e telefone opcional
export default (sequelize) => {
  const Pessoa = sequelize.define("Pessoa", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  return Pessoa;
};
