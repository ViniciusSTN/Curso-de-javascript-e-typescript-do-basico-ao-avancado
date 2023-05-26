const mongoose = require('mongoose');
const validator = require('validator');   // valida formularios
const bcryptjs = require('bcryptjs');       // hash de senha

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true}
});

// retorna uma promise, portanto é preciso usar async await em login.register()
const LoginModel = mongoose.model('Login', LoginSchema);


class Login {
  constructor(body) {
    this.body = body; // todos os imput vão ser coletados aqui
    this.errors = []; // se tiver um erro aqui não enviará para o BD
    this.user = null;
  }

  async login() {
    this.validate();
    if (this.errors.length > 0) return;
    this.user = await LoginModel.findOne({ email: this.body.email }); // procurando um registro no BD com o email igual ao body.email   // retorna o usuario ou null

    // caso não existir
    if(!this.user) {
      this.errors.push('Usuário não existe');
      return;
    }

    // caso existir
    // compara com o hash do BD
    if(!bcryptjs.compareSync(this.body.password, this.user.password)) {
      this.errors.push('Senha inválida');
      this.user = null;
      return;
    }
  }

  async register() {
    this.validate();
    if (this.errors.length > 0) return; // se tiver erro não vai enviar ao BD

    await this.userExists();

    if (this.errors.length > 0) return; // checar novamente

    const salt = bcryptjs.genSaltSync();  // evitar que duas senhas idênticas produzam hashes idênticos
    this.body.password = bcryptjs.hashSync(this.body.password, salt); // criando hash para senha

    this.user = await LoginModel.create(this.body); // criar usuario no BD
  }

  validate() {
    this.cleanUp();
    if (!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
    if (this.body.password.length < 3 || this.body.password.length >= 50) this.errors.push('Senha precisa ter entre 3 e 50 caracteres');
  }

  cleanUp() {
    // atribuir caractere vazio para valres diferentes de string
    // para evitar inconsistência de dados
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }

    this.body = {
      email: this.body.email,
      password: this.body.password 
    };
  }

  async userExists() {
    // retorna o usuario ou null
    this.user = await LoginModel.findOne({ email: this.body.email }); // procurando um registro no BD com o email igual ao body.email
    if (this.user) this.errors.push('Usuário já registrado');
  }

}

module.exports = Login;
