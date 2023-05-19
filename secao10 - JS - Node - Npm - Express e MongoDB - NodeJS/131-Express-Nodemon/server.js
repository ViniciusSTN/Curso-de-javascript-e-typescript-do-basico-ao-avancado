const express = require("express");

const app = express();  // iniciar o express

// CRUD -> create, read, update, delete
//         post  | get | put  |  delete


// ao acessar uma pagina, uma rota será enviada e a pagina será carregada por meio do método GET para o usuário

// req -> requisição
// res -> resposta
//http://localhost:3000
app.get('/', (req, res) => {
    // meramente ilustrativo, não é assim que é usado em projetos
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `);
});

// como há um formulário que foi enviado, é preciso ter um método post na página
app.post('/', (req, res) => {
    res.send('Recebi o formulário');
});

// http://localhost:3000/contato 
app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente');
});

// inicializar o servidor
app.listen(3000, () => {
    console.log(`Servidor executando na porta 3000`);
    console.log('Acessar http://localhost:3000');   // gera um link clicavel
});   // é necessáro ter uma porta que fica 'ouvindo' se alguma requisição é feita

// no cmd ou terminal
// para inicializar: node server.js
// parar no terminal: ctl + c
