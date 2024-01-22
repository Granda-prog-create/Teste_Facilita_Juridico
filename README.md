# Facilita Jurídico - Sistema de Gerenciamento de Clientes e Rotas

Este é um projeto de sistema de gerenciamento de clientes para uma empresa que realiza limpeza em residências, incluindo funcionalidades de cadastrar, listar e otimizar rotas de atendimento.

Configuração do Projeto
Backend (Node.js e PostgreSQL):

Navegue até a pasta backend.
Execute npm install para instalar as dependências.
Configure o banco de dados PostgreSQL e ajuste as configurações no arquivo backend/.env.
Execute npm run migrate para aplicar as migrações do banco de dados.
Execute npm start para iniciar o servidor backend.
Frontend (React):

Navegue até a pasta frontend.
Execute npm install para instalar as dependências.
Execute npm start para iniciar o servidor de desenvolvimento do React.
Estrutura do Projeto
Backend:

/backend/src: Contém o código-fonte do backend.
/backend/migrations: Contém as migrações do banco de dados.
/backend/utils: Contém utilitários, como o algoritmo de otimização de rotas.
Frontend:

/frontend/src: Contém o código-fonte do frontend.
/frontend/components: Contém componentes React, como a lista de clientes e a modal de rotas.
/frontend/utils: Contém utilitários, como funções de requisição à API.
Funcionalidades
Cadastro de Clientes:

Acesse a aplicação e utilize a seção "Clientes" para cadastrar novos clientes.
Preencha as informações necessárias, incluindo coordenadas X e Y para otimização de rotas.
Listagem e Filtragem de Clientes:

Visualize a lista de clientes cadastrados e filtre com base nas informações disponíveis.
Otimização de Rotas:

Utilize o botão "Calcular Rota" para otimizar a ordem de visitação dos clientes.
Uma modal será exibida mostrando a ordem otimizada.
Dependências Principais
Backend:

express: Framework web para Node.js.
pg: Cliente PostgreSQL para Node.js.
knex: Construtor de consultas SQL para Node.js.
Frontend:

react: Biblioteca de criação de interfaces.
axios: Cliente HTTP para fazer requisições à API backend.
react-modal: Componente React para modais.
Contribuindo
Se desejar contribuir, abra uma "issue" descrevendo a alteração proposta antes de enviar um "pull request".
Licença
Este projeto é licenciado sob a Licença MIT.