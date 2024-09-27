Aqui está uma versão atualizada do README, incluindo as tecnologias usadas:

# API Fastify para Times e Pilotos de F1

Esta API fornece informações sobre times e pilotos da Fórmula 1, utilizando o framework Fastify para garantir desempenho e simplicidade.

## Índice

- [Recursos](#recursos)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Uso](#uso)
- [Endpoints da API](#endpoints-da-api)
  - [Obter Todos os Times](#obter-todos-os-times)
  - [Obter Todos os Pilotos](#obter-todos-os-pilotos)
  - [Obter Piloto por ID](#obter-piloto-por-id)
- [Contribuições](#contribuições)
- [Licença](#licença)

## Recursos

- **CORS Ativado**: Suporta requisições de origens diferentes.
- **Estrutura Simples**: Código modular e fácil de entender.
- **Desempenho**: Construído para alta eficiência.

## Tecnologias

- [Node.js](https://nodejs.org/)
- [Fastify](https://www.fastify.io/)
- [TypeScript](https://www.typescriptlang.org/)
- **Dependências**:
  - `@fastify/cors`: Para habilitar CORS.
  - `fastify`: Framework para criar a API.
- **Dev Dependências**:
  - `typescript`: Para tipagem estática.
  - `tsup`: Para empacotar o código TypeScript.
  - `tsx`: Para executar código TypeScript diretamente.
  - `@types/node`: Tipos para Node.js.

## Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd <diretorio-do-repositorio>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor:
   ```bash
   npm run start:dev
   ```

O servidor será iniciado na porta 3333.

## Uso

Após iniciar o servidor, você pode testar os endpoints usando ferramentas como Postman ou cURL.

## Endpoints da API

### Obter Todos os Times

- **URL**: `/teams`
- **Método**: GET
- **Resposta**:
  ```json
  {
    "teams": [
      { "id": 1, "name": "McLaren", "base": "Woking, Reino Unido" },
      { "id": 2, "name": "Mercedes", "base": "Brackley, Reino Unido" },
      { "id": 3, "name": "Red Bull Racing", "base": "Milton Keynes, Reino Unido" }
    ]
  }
  ```

### Obter Todos os Pilotos

- **URL**: `/drives`
- **Método**: GET
- **Resposta**:
  ```json
  {
    "drives": [
      { "id": 1, "name": "Max Verstappen", "team": "Red Bull Racing" },
      { "id": 2, "name": "Lewis Hamilton", "team": "Ferrari" },
      { "id": 3, "name": "Lando Norris", "team": "McLaren" }
    ]
  }
  ```

### Obter Piloto por ID

- **URL**: `/drives/:id`
- **Método**: GET
- **Parâmetros**: `id` (número do piloto)
- **Resposta**:
  - Se encontrado:
    ```json
    {
      "id": 1,
      "name": "Max Verstappen",
      "team": "Red Bull Racing"
    }
    ```
  - Se não encontrado:
    ```json
    {
      "message": "Driver Not Found"
    }
    ```
