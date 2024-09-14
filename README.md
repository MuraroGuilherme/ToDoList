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

### 1. Rodando na sua máquina

Clone o repositório.
```bash
git clone https://github.com/MuraroGuilherme/ToDoList
```

Certifique-se de que você tem o [Node.js](https://nodejs.org/) e o npm instalados. Caso não tenha, faça o download e instale a partir do site oficial do Node.js.

Para instalar as dependências do projeto, execute:

```bash
npm install
```

Para o banco de dados, certifique que o prisma está instalado.

```bash
npm install prisma --save-dev
```
E inicialize.

```bash
npx prisma db push
```

Crie um arquivo .env na raiz do projeto e defina a variável para conectar-se ao banco.
```bash
DATABASE_URL="mysql://user:password@localhost:3000/todolist"
```
Inicie a API
```bash
npm run dev
```
## Documentação com Swagger

Após configurar a API, basta acessar este link
```bash
http://localhost:3000/docs
```

