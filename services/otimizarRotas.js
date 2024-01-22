
const express = require('express');
const router = express.Router();
const otimizarRotas = require('../utils/otimizarRotas');

router.get('/ordem-de-visita', (req, res) => {
  // Obtém a lista de clientes do seu banco de dados
  const clientes = obterClientesDoBancoDeDados(); 

  // Calcula a ordem otimizada
  const ordemOtimizada = otimizarRotas(clientes);

  res.json(ordemOtimizada);
});

module.exports = router;
