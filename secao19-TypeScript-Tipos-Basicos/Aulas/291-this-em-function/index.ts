// o this deve ser informado antes do primeiro parâmetro
export function funcao(this: Date, nome: string, age: number): void {
  console.log(this);
  console.log(nome, age);
}

// para informar o this precisa usar call
funcao.call(new Date(), 'Vinicius', 21);

// ou então usar apply
funcao.apply(new Date(), ['Vinicius', 21]);


// funcao('Vinicius', 21);      // gera erro por não informar o this
