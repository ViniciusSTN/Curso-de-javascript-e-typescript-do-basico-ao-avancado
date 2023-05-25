const express = require("express");
const app = express();  
const path = require("path");

const routes = require('./routes');
app.use(routes);

app.use(express.urlencoded({ extended: true })); 

// --------------------------------------------------------------
// view
// npm i ejs
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
// --------------------------------------------------------------

app.listen(3000, () => {
    console.log(`Servidor executando na porta 3000`);
    console.log('Acessar http://localhost:3000');   
});   
