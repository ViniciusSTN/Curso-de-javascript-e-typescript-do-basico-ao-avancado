import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Ilza',
      sobrenome: 'Santana',
      email: 'email2@gmail.com',
      idade: 55,
      peso: 85,
      altura: 1.6,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
