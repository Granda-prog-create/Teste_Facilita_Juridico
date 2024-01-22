const express = require('express');
const Cliente = require('../models/cliente');
const otimizarRotas = require('../utils/otimizarRotas');

const router = express.Router();

// Rota para otimizar rotas
router.get('/otimizar-rotas', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    const ordemDeVisita = otimizarRotas(clientes);
    res.status(200).json(ordemDeVisita);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao otimizar rotas' });
  }
});

module.exports = router;
