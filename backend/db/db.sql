-- Crie um banco de dados chamado "facilita_juridico"
CREATE DATABASE facilita_juridico;

-- Use o banco de dados
\c facilita_juridico;

-- Crie uma tabela para armazenar os clientes
CREATE TABLE clientes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255),
  email VARCHAR(255),
  telefone VARCHAR(15),
  coordenada_x INT,
  coordenada_y INT
);