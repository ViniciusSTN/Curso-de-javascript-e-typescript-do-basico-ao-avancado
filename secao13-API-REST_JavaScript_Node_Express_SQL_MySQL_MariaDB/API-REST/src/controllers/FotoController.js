import multer from 'multer';
import multerConfig from '../config/multerConfig';

// single pois é um unico arquivo, e seu parâmetro é o nome do campo onde vai receber o arquivo
const upload = multer(multerConfig).single('foto');

class FotoController {
  async store(req, res) {
    return upload(req, res, (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code], // exibe a mensagem de erro definida no arquivo multerConfig
        });
      }

      return res.json(req.file); // dados do arquivo enviado
    });
  }
}

export default new FotoController();
