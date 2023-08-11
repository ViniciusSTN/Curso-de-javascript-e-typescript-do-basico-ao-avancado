const text = `Um dia aaaaalinaaaa, um grupo de viajantes chegou à aldeia. Eles eram comerciantes que vinham de terras distantes Joao e trouxeram consigo histórias JoAo de lugares longínquos e conhecimento sobre as estrelas. Lucas ficou encantado com as histórias e fez amizade com um dos viajantes, chamado Alina, que era AliNa uma astrônoma AlinA experiente AliNaaaaaAAAAaaaa.`;

// * (opcional) 0 ou n                  -> {0,}
// + (OBRIGATÓRIO) 1 ou n               -> {1,}
// ? (opcional) 0 ou 1                  -> {0,1}

// {n,m} -> n: minimo ; m: maximo 

// EXEMPLOS:       
// {1,} -> minimo: 1, máximo: indeterminado
// {,10} -> minimo: 0, máximo: 10
// {5,10} -> minimo: 5, máximo: 10
// {10} -> especificamente 10


// \ caractere de escape

// ------------------------------------------------------------------------------------
// + (OBRIGATÓRIO) 1 ou n

const regExp1 = /Alina+/gi; // o ultimo a deve existir 1 ou mais vezes (1 é obrigatório)
const found1 = text.match(regExp1);
// console.log(found1);

// [ 'alinaaaa', 'Alina', 'AliNa', 'AlinA', 'AliNaaaaaAAAAaaaa' ]
// OBS: No texto está aaaaalinaaaa e a busca encontrou alinaaaa, pois o regExp1 informou que apenas o ultimo 'a' deverá repetir -> para pegar a palavra completa: /A+lina+/gi;


// ------------------------------------------------------------------------------------
// ? (opcional) 0 ou 1

// nesse caso vão fazer a mesma coisa
const regExp2 = /\.(jpg|jpeg)/gi; // jpg ou jpeg
const regExp3 = /\.jpe?g/gi; // e -> 0 ou 1
const regExp4 = /\.jpe{0,1}g/gi; // e -> minimo: 0, maximo: 1
const regExp5 = /\.jp(e|E)?g/gi; // e ou E -> 0 ou 1
const regExp6 = /\.(jp|JP)(e|E)?(g|G)/g; // Xingamento em hebraico

// OBS: O quantificador no caso 5 e 6 estão referente ao grupo

const list = [
  'Item1.jpg',
  'Item2.jpeg',
  'Item3.JPG',
  'Item4.JPEG',
  'Item5.txt',
];

const found2 = [];

list.forEach((item) => {
  if (item.match(regExp6)) {
    found2.push(item);
  }
});

console.log(found2);
