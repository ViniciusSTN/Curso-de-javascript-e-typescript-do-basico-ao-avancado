// enquanto filter apenas retorna o valor para o novo array com base em true ou false, o map pode retornar valores modificados (com base no array original) para o novo array, por exemplo multiplicar esses valores

// portanto map vai SEMPRE ter o mesmo tamanho do array original

// OBS: Dependendo de como for a função de callback do map, poderá ALTERAR o vetor original. Para não alterar, o resultado deverá estar direto no return

const numbers = [5, 50, 80, 1, 2, 4, 60, 25, 83];

// dobrar o valor do array
// retorna o dobro de cada valor
const numbersTwice = numbers.map(value => value * 2);
console.log(numbersTwice);
