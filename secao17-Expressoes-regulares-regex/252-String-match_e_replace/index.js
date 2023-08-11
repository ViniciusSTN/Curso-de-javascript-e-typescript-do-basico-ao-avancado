const text = `Um dia, um grupo de viajantes chegou à aldeia. Eles eram comerciantes que vinham de terras distantes Joao e trouxeram consigo histórias JoAo de lugares longínquos e conhecimento sobre as estrelas. Lucas ficou encantado com as histórias e fez amizade com um dos viajantes, chamado Alina, que era AliNa uma astrônoma AlinA experiente.`;

// -----------------------------------------------------------------------
// match

const regExp1 = /Alina|Joao/gi;
const found1 = text.match(regExp1); // retorna todas as ocorrências
// console.log(found1);


// -----------------------------------------------------------------------
// replace 

// (método padrão de array e strings) -> é possível passar regex

const replacedText = text.replace(/Alina|Joao/gi, 'TROCADO');
// console.log(replacedText);

// quando usar grupos, é possível usar uma espécie de variável para informar o que será feito com o grupo, nesse caso está adicionando aspas em todo Alina e João
// se tivesse dois grupos teria $1 e $2
const replacedText2 = text.replace(/(Alina|Joao)/gi, '"$1"');
// console.log(replacedText2);

// explicação de como seria as variaveis com números, observe que o primeiro grupo possui outro grupo dentro
// (.g1.(g2))(.g3.)(.g4.) 
// g1 -> $1
// g2 -> $2
// g3 -> $3
// g4 -> $4


// também é possivel atribuir uma função
const replacedText3 = text.replace(/(Alina|Joao)/gi, (word) => {
  return word.toUpperCase();
});
console.log(replacedText3);

