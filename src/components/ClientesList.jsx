import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientesList = () => {
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [coordenadaX, setCoordenadaX] = useState(0);
  const [coordenadaY, setCoordenadaY] = useState(0);

  useEffect(() => {
    // Buscar clientes ao montar o componente
    axios.get('http://localhost:3001/clientes').then((response) => setClientes(response.data)).catch((error) => console.error('Erro ao buscar clientes:', error));
  }, []);

  const handleCadastrarCliente = () => {
    // Chame a API para cadastrar o cliente
    axios.post('http://localhost:3001/clientes/cadastrar', {
      nome,
      email,
      telefone,
      coordenadaX,
      coordenadaY,
    }).then((response) => console.log(response.data));
  };

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <div>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Telefone:</label>
        <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
      </div>
      <div>
        <label>Coordenada X:</label>
        <input type="number" value={coordenadaX} onChange={(e) => setCoordenadaX(e.target.value)} />
      </div>
      <div>
        <label>Coordenada Y:</label>
        <input type="number" value={coordenadaY} onChange={(e) => setCoordenadaY(e.target.value)} />
      </div>
      <button onClick={handleCadastrarCliente}>Cadastrar Cliente</button>

      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            {cliente.nome} - {cliente.email} - {cliente.telefone} - ({cliente.coordenadaX}, {cliente.coordenadaY})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientesList;
