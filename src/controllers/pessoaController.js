import models from "../models/index.js";
const { Pessoa } = models;

// Pessoas: endpoints pra criar e listar pessoas.
export const createPessoa = async (req, res) => {
  try {
    const pessoa = await Pessoa.create(req.body);
    res.status(201).json(pessoa);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getAllPessoas = async (_req, res) => {
  try {
    const pessoas = await Pessoa.findAll();
    res.json(pessoas);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
