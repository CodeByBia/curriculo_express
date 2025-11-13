import models from "../models/index.js";
const { Experiencia } = models;

// Controller de Experiências — aqui a gente cria/atualiza/remove/lista experiências
export const createExperiencia = async (req, res) => {
  try {
    const { empresa, cargo, pessoaId } = req.body;

    if (!empresa || !cargo || !pessoaId) {
      return res.status(400).json({ error: "Faltam dados: empresa, cargo e pessoaId são necessários" });
    }

    const newRecord = await Experiencia.create({ empresa, cargo, pessoaId });
    return res.status(201).json({ message: "Criado", data: newRecord });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

export const updateExperiencia = async (req, res) => {
  try {
    const registro = await Experiencia.findByPk(req.params.id);
    if (!registro) return res.status(404).json({ error: "Experiência não encontrada" });

    await registro.update(req.body);
    return res.status(200).json({ message: "Atualizado", data: registro });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

export const deleteExperiencia = async (req, res) => {
  try {
    const deleted = await Experiencia.destroy({ where: { id: req.params.id }});
    if (!deleted) return res.status(404).json({ error: "Experiência não encontrada" });

    return res.status(204).send();
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

export const getExperiencia = async (req, res) => {
  try {
    const registro = await Experiencia.findByPk(req.params.id);
    if (!registro) return res.status(404).json({ error: "Experiência não encontrada" });

    return res.status(200).json({ data: registro });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

export const getAllExperiencias = async (req, res) => {
  try {
    const registros = await Experiencia.findAll();
    return res.status(200).json(registros);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
