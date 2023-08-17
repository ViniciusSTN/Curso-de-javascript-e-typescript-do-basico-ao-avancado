// overload -> baseado nos parâmetros que receber, a função se comporta diferente

// não é muito usado pois da muitas possibilidades para o código, o que faz ele ficar complexo

// é mais comum em libs

type Adder = {
  // possibilidades de parâmetros
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);
  return x + (y || 0);
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 3));
