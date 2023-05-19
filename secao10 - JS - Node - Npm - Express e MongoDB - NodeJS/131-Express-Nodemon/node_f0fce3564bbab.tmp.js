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

app.listen(3000);   // é necessáro ter uma porta que fica 'ouvindo' se alguma requisição é feita

// para parar o servidor no terminal: ctrl + alt + m