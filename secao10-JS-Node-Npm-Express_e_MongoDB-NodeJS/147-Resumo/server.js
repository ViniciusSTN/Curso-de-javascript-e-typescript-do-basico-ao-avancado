require('dotenv').config(); // variaveis de ambiente (.env) -> .gitignore
const express = require('express');
const app = express();
const mongoose = require('mongoose'); // modelar base de dados e garantir que seja enviado corretamente

// conectar com servidor
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.emit('pronto');
  })
  .catch(e => console.log(e));

const session = require('express-session'); // identificar navegador do cliente e salvar cookie com id no pc dele. Toda vez que ele conectar, o servidor vai checar esse cookie
const MongoStore = require('connect-mongo');  // para as sessões serem salvas no BD ao invés de salvar na memória. Por padrão são salvas em memória
const flash = require('connect-flash'); // mensagens autodestrutivas. Feedback para o usuário. Mensagens são salvas em sessão
const routes = require('./routes'); // rotas da aplicação
const path = require('path'); // caminhos

const helmet = require('helmet'); // recomendação do express para segurança
const csrf = require('csurf');  // csrf tokens de identificação para nenhum site externo malicioso tenha acesso aos dados da aplicação. Segurança

const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware'); // middlewares que tem funções que executam no meio de rotas

app.use(helmet());

app.use(express.urlencoded({ extended: true }));  // para postar formularios dentro da aplicação
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public'))); // arquivos estaticos da aplicação para serem acessados diretamente

const sessionOptions = session({
  secret: 'akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
app.use(sessionOptions);
app.use(flash());

// arquivos renderizados na tela -> geralmente html
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');  // engine para renderizar html

app.use(csrf());

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

// escutar portas -> nesse caso a 3000
app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});
