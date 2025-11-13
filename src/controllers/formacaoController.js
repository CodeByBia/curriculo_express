import models from "../models/index.js";
const { Formacao } = models;

// Controller de Formacao: endpoints para criar e listar
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
