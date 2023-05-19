const express = require("express");

const app = express();  

// para recuperar/tratar o conteudo que foi enviado no formulário do get
app.use(express.urlencoded({ extended: true }));   

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="qualquerCoisa">
            <button>Enviar</button>
        </form>
    `);
});

// para receber o parâmetro, basta colocar /:nome_do_parâmetro
// ao colocar " ? ", o parâmetro torna-se opicional e não obrigatório
// para teste: http://localhost:3000/testes/123/vinicius
// para teste: http://localhost:3000/testes/?nome=vinicius&sobrenome=santana&idade=20
app.get('/testes/:idUsuarios?/:nomeUsuario?', (req, res) => {
    // parâmetros de URL
    console.log(req.params);    // { idUsuarios: '123', nomeUsuario: 'vinicius' }

    // query string:
    console.log(req.query);     // { nome: 'vinicius', sobrenome: 'santana', idade: '20' }
    // res.send(req.params.idUsuarios);
});

app.post('/', (req, res) => {
    // para recuperar o body do que foi enviado, é preciso usar o método app.use(express.urlencoded({ extended: true }));
    console.log(req.body);      
    res.send(`O que você me enviou foi: ${req.body.qualquerCoisa}`);
});

app.listen(3000, () => {
    console.log(`Servidor executando na porta 3000`);
    console.log('Acessar http://localhost:3000');   
});   
