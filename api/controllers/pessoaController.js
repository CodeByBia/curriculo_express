import models from "../models/index.js";
const { Pessoa } = models;

// Pessoas: endpoints pra criar e listar pessoas.
// Comentário informal: nome, email e telefone costumam vir no body.
export const createPessoa = async (req, res) => {
  try {
    const pessoa = await Pessoa.create(req.body);
    // devolve a pessoa criada, com id gerado pelo banco
    res.status(201).json(pessoa);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getAllPessoas = async (_req, res) => {
  try {
    const pessoas = await Pessoa.findAll();
    // normalmente aqui a lista de pessoas — pode ser vazia
    res.json(pessoas);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
