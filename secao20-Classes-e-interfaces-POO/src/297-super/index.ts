// super classe
export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

// subclasse
export class Aluno extends Pessoa {
  // nesse caso não precisa informar modificadores de acesso, somente é preciso informar no momento da criação, como por exemplo: public sala: string - os demais já foram criados no constructor da super classe
  // como sala está sendo criado dentro do parâmetro do constructor, não é preciso atribuir usando this.sala = sala;
  // mas caso não tivesse informado o public dentro do constructor, teria que criar fora do contructor e atribuir o this.sala = sala dentro dele (código comentado)

  // public sala: string;
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string, // sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
    // this.sala = sala;
  }

  getNomeCompleto(): string {
    console.log('Fazendo algo antes');

    // para usar algo da classe super, executar um método dela por exemplo, usar super.
    const result = super.getNomeCompleto();
    return result + ' ALTERADO';
  }
}

const aluno = new Aluno('Vinicius', 'Santana', 20, '000.000.000-00', '3A');

console.log(aluno);
