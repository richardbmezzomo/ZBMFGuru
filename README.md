# API de Previsão de Ondas

Uma API simples que exibe a previsão de ondas para a praia dos Ingleses, em Florianópolis.

## Como Funciona

- A API coleta dados da Storm Glass API.
- Os dados são armazenados em um banco de dados MongoDB.

## Como Usar

1. Certifique-se de ter o Node.js 22+ instalado.
2. Configure o arquivo `.env` na raiz do projeto:
   ```
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/previsao_ondas
   STORMGLASS_API_KEY=SUA_CHAVE
   ```
3. Inicie o servidor:
   ```bash
   npm run dev
   ```
4. Acesse [http://localhost:3000](http://localhost:3000).

## Tecnologias

- Node.js
- Express
- MongoDB
- Storm Glass API
