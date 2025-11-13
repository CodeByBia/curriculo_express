import models from "../models/index.js";
const { Formacao } = models;

// Formações: criação e listagem. Comentários rápidos para facilitar leitura.
export const createFormacao = async (req, res) => {
  try {
    const formacao = await Formacao.create(req.body);
    res.status(201).json(formacao);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getAllFormacoes = async (_req, res) => {
  try {
    const list = await Formacao.findAll();
    res.json(list);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
