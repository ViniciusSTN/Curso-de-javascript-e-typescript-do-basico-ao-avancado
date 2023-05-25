const express = require("express");
const app = express();  
const path = require("path");
const routes = require('./routes');
const {middlewareGlobal} = require('./src/middlewares/middlewares');

// --------------------------------------------------------------------
// exemplos de middlewares:
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

// para que todas as requisições de todos os verbos passem pelo middleware global que criamos:
app.use(middlewareGlobal);     // middleware global

app.use(routes);
// --------------------------------------------------------------------

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log(`Servidor executando na porta 3000`);
    console.log('Acessar http://localhost:3000');   
});
