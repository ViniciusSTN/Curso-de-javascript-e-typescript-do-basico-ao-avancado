class FotoController {
  async store(req, res) {
    res.json(req.file); // dados do arquivo enviado
  }
}

export default new FotoController();
