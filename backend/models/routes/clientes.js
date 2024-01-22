const express = require('express');
const Cliente = require('../models/cliente');

const router = express.Router();

// Rota para cadastrar cliente
router.post('/cadastrar', async (req, res) => {
  try {
    const { nome, email, telefone, coordenadaX, coordenadaY } = req.body;
    const cliente = await Cliente.create({ nome, email, telefone, coordenadaX, coordenadaY });
    res.status(201).json(cliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao cadastrar cliente' });
  }
});

// Rota para obter a lista de clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter clientes' });
  }
});

module.exports = router;
