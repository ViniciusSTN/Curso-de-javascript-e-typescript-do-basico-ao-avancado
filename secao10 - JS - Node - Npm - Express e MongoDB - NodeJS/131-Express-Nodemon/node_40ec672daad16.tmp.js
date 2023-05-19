const express = require("express");

const app = express();  // iniciar o express

// CRUD -> create, read, update, delete
//         post  | get | put  |  delete


// ao acessar uma pagina, uma rota será enviada e a pagina será carregada por meio do método GET para o usuário

// req -> requisição
// res -> resposta
app.get('/', (req, res) => {
    res.send('Hello world');
});

// inicializar o servidor
app.listen(3000, () => {
    console.log(`Servidor executando na porta 3000`);
    console.log('Acessar http://localhost:3000');
});   // é necessáro ter uma porta que fica 'ouvindo' se alguma requisição é feita

// no cmd ou terminal
// para inicializar: node server.js
// parar no terminal: ctl + c
