import pessoaModel from "./pessoaModel.js";
import formacaoModel from "./formacaoModel.js";
import experienciaModel from "./experienciaModel.js";
import { sequelize } from "../db/sequelize.js";

const Pessoa = pessoaModel(sequelize);
const Formacao = formacaoModel(sequelize);
const Experiencia = experienciaModel(sequelize);

Pessoa.hasMany(Formacao, { foreignKey: "pessoaId" });
Formacao.belongsTo(Pessoa, { foreignKey: "pessoaId" });

Pessoa.hasMany(Experiencia, { foreignKey: "pessoaId" });
Experiencia.belongsTo(Pessoa, { foreignKey: "pessoaId" });

export default { sequelize, Pessoa, Formacao, Experiencia };
