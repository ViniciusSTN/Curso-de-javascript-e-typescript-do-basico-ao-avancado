// -----------------------------------

require('dotenv').config();
// criar arquivo .env na raiz do projeto

// -----------------------------------

const express = require("express");
const app = express();  
const path = require("path");
const routes = require('./routes');
const {middlewareGlobal} = require('./src/middlewares/middlewares');

// -------------------------------------

const mongoose = require('mongoose');

// Executar com: node server js

// Aparantemente n é mais necessário esses parâmetros
// mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })  //retorna uma promessa

// para evitar que o servidor escute antes de conectar
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conectei à base de dados');
        app.emit('pronto');  // emite um evento
    })
    .catch(e => console.log(e));

// -------------------------------------


app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(middlewareGlobal);     // middleware global

app.use(routes);


app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// -------------------------------------

// dessa forma a conexão só vai ocorrer quando app.emit() emitir um evento
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log(`Servidor executando na porta 3000`);
        console.log('Acessar http://localhost:3000');   
    });
});
