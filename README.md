# Sistema de Gerenciamento de Alunos

Este projeto implementa um sistema de gerenciamento de alunos utilizando Node.js e PostgreSQL. O sistema segue o padrão arquitetural MVC (Model-View-Controller), proporcionando uma estrutura organizada para manipulação de dados de alunos.

## Estrutura do Projeto

```
uc-05-bd/
├── config/
│   └── database.js         # Configuração de conexão com PostgreSQL
├── src/
│   └── modules/
│       └── aluno/
│           ├── controllers/ # Lógica de negócios
│           │   └── index.js
│           ├── models/      # Interação com banco de dados
│           │   └── index.js
│           └── views/       # Interface com usuário
│               └── index.js
├── index.js                 # Ponto de entrada da aplicação
├── package.json
└── README.md
```

## Funcionalidades

O sistema oferece as seguintes operações para gerenciamento de alunos:

- **Criar**: Adiciona um novo aluno ao banco de dados
- **Editar**: Atualiza informações de um aluno existente
- **Listar todos**: Exibe todos os alunos cadastrados
- **Buscar por e-mail**: Localiza um aluno específico por e-mail
- **Excluir**: Remove um aluno específico do banco de dados
- **Excluir todos**: Remove todos os alunos do banco de dados
- **Contagem**: Exibe o número total de alunos cadastrados

## Componentes

### Model (AlunoModel)

Responsável pela interação direta com o banco de dados:
- Executa queries SQL para operações CRUD
- Gerencia a persistência dos dados
- Retorna resultados das operações

### Controller (AlunoController)

Implementa a lógica de negócios:
- Valida entradas de dados
- Manipula erros e exceções
- Coordena o fluxo entre Model e View

### View (AlunoView)

Gerencia a interface com o usuário:
- Apresenta dados em formato tabular
- Coleta inputs do usuário
- Fornece feedback sobre operações realizadas

## Requisitos

- Node.js (versão 14 ou superior)
- PostgreSQL (versão 12 ou superior)
- NPM ou Yarn

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/uc-05-bd.git
    cd uc-05-bd
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure o banco de dados:
    - Crie um banco de dados PostgreSQL
    - Configure os parâmetros de conexão em `config/database.js`
    - Execute o seguinte script SQL para criar a tabela necessária:

    ```sql
    CREATE TABLE aluno (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      matricula VARCHAR(50) NOT NULL,
      telefone VARCHAR(20) NOT NULL,
      cod_turma VARCHAR(10)
    );
    ```

## Uso

Para executar o programa:

```bash
node index.js
```

### Exemplos de uso:

```javascript
// Criar um novo aluno
AlunoView.criar("João Silva", "joao@email.com", "2023001", "11999887766", "TURMA-A");

// Listar todos os alunos
AlunoView.listarTodos();

// Buscar aluno por e-mail
AlunoView.listarPorEmail("joao@email.com");

// Editar informações do aluno
AlunoView.editarAluno("João Silva Santos", "joao@email.com", "2023001", "11999887755", "TURMA-B");

// Excluir um aluno
AlunoView.deletarAluno("joao@email.com");

// Ver total de alunos
AlunoView.totalAlunos();
```

## Dependências

- `pg`: Driver PostgreSQL para Node.js
- `prompt-sync`: Biblioteca para entrada de dados no console

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

## Autor

Desenvolvido como parte do curso de Banco de Dados.

## Convenção
-Para o nome dos métodos ou funções: camelcase
-Para o nome de variaveis snake_case
-Para o nome classes: PascalCase
