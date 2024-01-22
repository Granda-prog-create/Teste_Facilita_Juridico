import React from 'react';
import Modal from 'react-modal';

const RotaModal = ({ isOpen, onClose, ordemDeVisita }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Ordem de Visitação"
    >
      <h2>Ordem de Visitação</h2>
      <ul>
        {ordemDeVisita.map(cliente => (
          <li key={cliente.id}>{cliente.nome}</li>
        ))}
      </ul>
      <button onClick={onClose}>Fechar</button>
    </Modal>
  );
};

export default RotaModal;
