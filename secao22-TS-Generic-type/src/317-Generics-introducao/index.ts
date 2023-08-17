// o T de meuFilter<T> é passado para FilterCallback<U>, ou seja, o tipo T é igual a U
// como se fosse parâmetros e argumentos
type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

// para atribuir tipo genérico <T> (na verdade pode ser qualquer coisa dentro de <>, mas por convenção usa-se T)
// na hora da chamada da função o tipo vai ser inferido e passado para os outros T
export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayFiltrado = meuFilter(array, (value) => value < 5);
console.log(arrayFiltrado);

const array2 = ['a', 'a', 'b', 'c'];
const arrayFiltrado2 = meuFilter(array2, (value) => value !== 'a');
console.log(arrayFiltrado2);

// também é possível informar qual o tipo genérico, mas não tem necessidade, pois o TS vai inferir esse tipo
const array3 = ['a', 'a', 'b', 'c'];
const arrayFiltrado3 = meuFilter<string>(array3, (value) => value !== 'a');
console.log(arrayFiltrado3);
