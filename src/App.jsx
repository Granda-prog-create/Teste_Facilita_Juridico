import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClientesList from './components/ClientesList';
import RotaModal from './components/RotasModal';
import './App.css';
const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [clientes, setClientes] = useState([]);
  const [ordemDeVisita, setOrdemDeVisita] = useState([]);

  useEffect(() => {
    // Buscar clientes ao montar o componente
    axios.get('http://localhost:3001/clientes')
      .then(response => setClientes(response.data))
      .catch(error => console.error('Erro ao buscar clientes:', error));
  }, []);

  const handleCalcularRota = async () => {
    try {
      // Chame a API para obter a ordem de visitação aqui
      const response = await axios.get('http://localhost:3001/ordem-de-visita');

      // Otimize as rotas
      const ordemOtimizada = OtimizarRotas(response.data);
      setOrdemDeVisita(ordemOtimizada);

      // Abra a modal
      setModalIsOpen(true);
    } catch (error) {
      console.error('Erro ao buscar ordem de visita:', error);
    }
  };

  return (
    <div>
      <h1>Facilita Juridico</h1>
      <ClientesList clientes={clientes} />
      <button onClick={handleCalcularRota}>Calcular Rota</button>
      <RotaModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} ordemDeVisita={ordemDeVisita} />
    </div>
  );
};

export default App;
