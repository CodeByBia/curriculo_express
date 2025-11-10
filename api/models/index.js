// Aqui juntamos os modelos com a instância do Sequelize e declarámos as relações.
// Comentários rápidos pra quem abrir o arquivo: os modelos são funções que recebem a
// instância do sequelize e retornam o model (padrão comum com Sequelize sem classes).
import pessoaModel from "./pessoaModel.js";
import formacaoModel from "./formacaoModel.js";
import experienciaModel from "./experienciaModel.js";
import { sequelize } from "../db/sequelize.js";

const Pessoa = pessoaModel(sequelize);
const Formacao = formacaoModel(sequelize);
const Experiencia = experienciaModel(sequelize);

// Associações simples: uma pessoa tem várias formações e experiências.
Pessoa.hasMany(Formacao, { foreignKey: "pessoaId" });
Formacao.belongsTo(Pessoa, { foreignKey: "pessoaId" });

Pessoa.hasMany(Experiencia, { foreignKey: "pessoaId" });
Experiencia.belongsTo(Pessoa, { foreignKey: "pessoaId" });

// Exportamos tudo num objeto para facilitar importação em controllers.
export default { sequelize, Pessoa, Formacao, Experiencia };
