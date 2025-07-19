# Testes Automatizados com Cypress - SauceDemo

Este projeto contém testes automatizados end-to-end (E2E) desenvolvidos com Cypress para a aplicação de demonstração [SauceDemo](https://www.saucedemo.com/). Este projeto faz parte da Prova Final da disciplina de Automação de Testes Web.

## Cenários Automatizados

### Página de Login (Testes de Sanidade)
- **LOGIN_001 - Login com sucesso**
- **LOGIN_002 - Login com senha inválida**
- **LOGIN_003 - Login com usuário bloqueado**

### Funcionalidade Pós-Login
- **COMPRA_001 - Adicionar item ao carrinho**

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

sauce-cypress-tests/
├── cypress/
│ ├── e2e/
│ │ ├── login.spec.js # Testes da página de login
│ │ └── cart.spec.js # Teste de adicionar item ao carrinho
├── cypress.config.js # Configuração do Cypress
├── package.json # Dependências e scripts
└── README.md # Este arquivo

less
Copiar
Editar

## Pré-Requisitos

- [Node.js](https://nodejs.org/) instalado.
- [Git](https://git-scm.com/) instalado (opcional, mas recomendado).

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/joaomarcelo-fig/sauce-cypress-tests.git
   cd sauce-cypress-tests
Instale as dependências do projeto:

bash
Copiar
Editar
npm install
Execução dos Testes
Para executar os testes, utilize um dos seguintes comandos:

Modo Interativo (Interface Gráfica do Cypress)
bash
Copiar
Editar
npx cypress open