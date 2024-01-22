const express = require('express');
const rotas = require('./models/routes/rotas');

const app = express();
const PORT = 3001;

app.use('/api', rotas); 

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
