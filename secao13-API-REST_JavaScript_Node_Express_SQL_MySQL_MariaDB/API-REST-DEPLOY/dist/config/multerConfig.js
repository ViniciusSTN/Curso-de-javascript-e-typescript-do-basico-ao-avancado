"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

exports. default = {
  fileFilter: (req, file, callBack) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== "image/jpeg") {
      // primeiro parâmetro é um erro
      return callBack(new _multer2.default.MulterError('Arquivo precisa ser PNG ou JPEG'));
    }

    // caso não tiver erro retorna true
    return callBack(null, true); // primeiro parâmetro é um erro
  },
  storage: _multer2.default.diskStorage({
    destination: (req, file, callBack) => {
      // o primeiro parâmetro é um erro
      callBack(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, callBack) => {
      // alterar o nome do arquivo para a hora atual em ms
      // a função extname extrai a extenção do arquivo, nesse caso tendo como base o nome do arquivo original
      callBack(null, `${Date.now()}_${aleatorio()}${_path.extname.call(void 0, file.originalname)}`);
    },
  }),
};
