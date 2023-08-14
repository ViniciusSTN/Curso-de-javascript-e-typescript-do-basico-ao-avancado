export class Empresa {
  public readonly nome: string; // public é redundante
  private readonly colaboradores: Colaborador[] = []; // classes podem ser tipos
  // no caso abaixo não seria possivel atribuir valores com push
  // private colaboradores: readonly Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');

const colaborador1 = new Colaborador('Luiz', 'Otavio');
const colaborador2 = new Colaborador('Vinicius', 'Henrique');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);

empresa1.adicionaColaborador({
  nome: 'Viniicus2',
  sobrenome: 'Santana2',
});

// empresa1.mostrarColaboradores();

console.log(empresa1);
