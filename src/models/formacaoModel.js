import { DataTypes } from "sequelize";

// Modelo Formação — guarda instituição, curso e nível (ex: Superior, Técnico)
export default (sequelize) => {
  const Formacao = sequelize.define("Formacao", {
    instituicao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    curso: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nivel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Formacao;
};
