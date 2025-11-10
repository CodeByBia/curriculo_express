import models from "../models/index.js";
const { Formacao } = models;

// Formações: criação e listagem. Comentários rápidos para facilitar leitura.
export const createFormacao = async (req, res) => {
  try {
    // esperamos um objeto com: instituicao, curso, nivel, pessoaId (idealmente)
    const formacao = await Formacao.create(req.body);
    // devolvemos o objeto criado — simples assim
    res.status(201).json(formacao);
  } catch (e) {
    // se algo deu errado, informamos pro cliente (e logamos no servidor automaticamente)
    res.status(500).json({ error: e.message });
  }
};

export const getAllFormacoes = async (_req, res) => {
  try {
    const list = await Formacao.findAll();
    // retorna lista — vazio é normal se ainda não houver dados
    res.json(list);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
