type Veiculo = {
  marca: string;
  ano: number;
};

type Car = {
  brand: Veiculo['marca']; // fica espelhado com a chave marca de Veiculo
  year: Veiculo['ano']; // fica espelhado com a chave ano de Veiculo
  name: string;
};

const carro: Car = {
  brand: 'Ford',
  year: 2020,
  name: 'Nome',
};

console.log(carro);
