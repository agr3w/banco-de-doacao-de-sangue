# Eligibility Form - Sistema de Doação de Sangue

Este projeto é um sistema de formulário de elegibilidade para doação de sangue, desenvolvido com **React.js** e **Material UI**, focando em uma interface simples e organizada para que usuários possam verificar sua aptidão para doar sangue.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-17.0.2-blue)
![Material-UI](https://img.shields.io/badge/material--ui-5.0.0-blue)
![Node](https://img.shields.io/badge/node-16.0.0-green)

## 📋 Descrição

Este formulário permite ao usuário responder a uma série de perguntas sobre sua saúde, hábitos e histórico de viagens, a fim de verificar se estão aptos a doar sangue. O formulário está dividido em várias etapas (steps) e inclui uma barra de progresso para guiar o usuário durante todo o processo.

## 🚀 Funcionalidades

- **Formulário de múltiplas etapas (steps)**: O formulário é dividido em etapas para facilitar o preenchimento.
- **Progress Bar**: Uma barra de progresso que acompanha o usuário em todas as etapas do formulário.
- **Revisão final**: Na última etapa, o usuário pode revisar todas as respostas antes de enviar.
- **Estilo moderno**: A interface é estilizada com **Material UI** e CSS modules para um design clean e elegante.
- **Respostas dinâmicas**: Campos são mostrados ou escondidos de acordo com as respostas do usuário, criando uma experiência personalizada.

## 🛠️ Tecnologias Utilizadas

- **React.js** - Biblioteca JavaScript para construir interfaces de usuário.
- **Material UI** - Biblioteca de componentes React que implementa o Material Design.
- **CSS Modules** - Para garantir um escopo local nos estilos de componentes.
- **React Router** - Navegação entre páginas.
- **JavaScript ES6+** - Utilização de sintaxe moderna do JavaScript.

## 📂 Estrutura do Projeto

```bash
📦 eligibility-form
├── 📂 public
├── 📂 src
│   ├── 📂 components
│   ├── 📂 steps
│   │   ├── Step1.jsx
│   │   ├── Step2.jsx
│   │   ├── Step3.jsx
│   │   ├── Step4.jsx
│   │   ├── Step5.jsx
│   │   └── steps.module.css
│   ├── 📂 common
│   │   ├── ProgressBar.jsx
│   ├── 📂 styles
│   ├── EligibilityForm.jsx
│   └── App.js
└── README.md
````
## 🖥️ Como rodar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/eligibility-form.git

# Acesse o diretório do projeto
cd verificador-doacao-sangue

# Instale as dependências
npm install

# Rode o projeto
npm start

# O projeto estará rodando em http://localhost:3000/

