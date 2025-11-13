import models from "../models/index.js";
const { Pessoa } = models;

// Controller de Pessoas: endpoints para criar e listar
export const createPessoa = async (req, res) => {
  try {
    const pessoa = await Pessoa.create(req.body);
  // retorna a pessoa criada
    res.status(201).json(pessoa);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getAllPessoas = async (_req, res) => {
  try {
    const pessoas = await Pessoa.findAll();
  // retorna lista (pode estar vazia)
    res.json(pessoas);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
