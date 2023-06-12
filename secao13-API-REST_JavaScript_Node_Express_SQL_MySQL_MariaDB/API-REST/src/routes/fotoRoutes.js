import { Router } from 'express';
import multer from 'multer';

import fotoController from '../controllers/FotoController';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const router = new Router();

// single pois é um unico arquivo, e seu parâmetro é o nome do campo onde vai receber o arquivo
router.post('/', upload.single('foto'), fotoController.store);

export default router;
