const express = require('express');
const otimizarRotas = require('../../utils/otimizarRotas');

const router = express.Router();

router.get('/otimizar-rotas', (req, res) => {
  const clientes = obterClientesDoBancoDeDados(); 
  const ordemDeVisita = otimizarRotas(clientes);
  res.json(ordemDeVisita);
});

module.exports = router;
