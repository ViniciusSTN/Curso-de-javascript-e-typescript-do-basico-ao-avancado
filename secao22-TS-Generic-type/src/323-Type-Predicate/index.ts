// antes:
// export function isNumber(value: unknown): boolean {}

// se valor retornado for true, value será number
// isso evita erro quando essa função for chamada em outra função, pois nesse caso a outra função não consegue inferir o tipo retornado por essa
export function isNumber(value: unknown): value is number {
  return typeof value === 'number'; // true ou false
}

export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((sum, value) => {
    // dará um erro pois não consegue inferir o tipo, para evitar isso: value is number
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return retorno;
}

console.log(soma(1, 2, 3, 4));
console.log(soma('1', '2', '3', '1'));
