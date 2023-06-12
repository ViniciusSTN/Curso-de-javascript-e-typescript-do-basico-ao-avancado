import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  storage: multer.diskStorage({
    destination: (req, file, callBack) => {
      // o primeiro parâmetro é um erro
      callBack(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, callBack) => {
      // alterar o nome do arquivo para a hora atual em ms
      // a função extname extrai a extenção do arquivo, nesse caso tendo como base o nome do arquivo original
      callBack(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
