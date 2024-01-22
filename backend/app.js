const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

const db = knex(require('./knexfile'));

// Rotas para gerenciar clientes
app.get('/clientes', async (req, res) => {
  try {
    const clientes = await db('clientes').select('*');
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar clientes.' });
  }
});

app.post('/clientes', async (req, res) => {
  const { nome, email, telefone, coordenada_x, coordenada_y } = req.body;
  try {
    await db('clientes').insert({ nome, email, telefone, coordenada_x, coordenada_y });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar cliente.' });
  }
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
