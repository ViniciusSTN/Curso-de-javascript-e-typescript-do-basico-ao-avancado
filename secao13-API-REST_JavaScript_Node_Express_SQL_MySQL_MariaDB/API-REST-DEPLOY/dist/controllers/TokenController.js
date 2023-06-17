"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    // se o email ou senha não forem enviadas
    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas'],
      });
    }

    // procura no BD comparando o email
    const user = await _User2.default.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe'],
      });
    }

    // validar senha
    // método da classe User de /models/
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha inválida'],
      });
    }

    const { id } = user;

    // gerando token para o usuário

    // o primeiro parâmetro é o payload -> dados sobre o usuário que podem ser resgatados posteriormente
    // o segundo parâmetro é a secret private key do arquivo .env, nomeada como TOKEN_SECRET
    // terceiro parâmetro é um objeto com opções, nesse caso foi enviado o tempo em que o token será expirado, definido na chave TOKEN_EXPIRATION do arquivo .env
    const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

exports. default = new TokenController();
