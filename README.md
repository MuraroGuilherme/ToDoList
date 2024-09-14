# API To Do List

Este projeto é uma API desenvolvida para gerenciar uma lista de tarefas (To Do List). A API fornece funcionalidades completas de CRUD (Create, Read, Update, Delete) para gerenciar tarefas. 

### Funcionalidades

- **Adicionar Tarefas**: Crie novas tarefas especificando um nome, descrição e status (para indicar se a tarefa foi concluída).
- **Gerenciar Tarefas**:
  - **Deletar**: Remova tarefas da lista.
  - **Alterar**: Atualize o nome, descrição e status das tarefas existentes.
  - **Retornar**: Recupere uma lista de todas as tarefas ou uma tarefa específica com base no ID.

### Descrição das Tarefas

Cada tarefa possui os seguintes atributos:
- **Nome**: Um título breve para a tarefa.
- **Descrição**: Detalhes adicionais sobre a tarefa.
- **Status**: Um indicador booleano que mostra se a tarefa foi concluída (true) ou ainda está pendente (false).

Esta API visa proporcionar uma solução completa e eficiente para o gerenciamento de tarefas em uma lista, facilitando a organização e acompanhamento das atividades.


## Dependências

- **Prisma Client**: ORM para interagir com o banco de dados
- **Dotenv**: Gerenciamento de variáveis de ambiente
- **Express**: Framework para Node.js
- **log4js**: Biblioteca de logging
- **Swagger-jsdoc** e **Swagger-ui-express**: Ferramentas para gerar e exibir documentação da API

## Instalação e Configuração

### 1. Instalar Dependências

Certifique-se de que você tem o [Node.js](https://nodejs.org/) e o npm instalados. Caso não tenha, faça o download e instale a partir do site oficial do Node.js.

Para instalar as dependências do projeto, execute:

```bash
npm install
