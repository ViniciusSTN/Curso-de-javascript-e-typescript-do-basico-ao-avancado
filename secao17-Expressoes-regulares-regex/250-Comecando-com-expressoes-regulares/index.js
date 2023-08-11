// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_expressions

// ----------------------------------------------------------------------------------

// RESUMO DA AULA
// g -> global (mais de uma ocorrência)
// i -> insensitive
// () -> grupos
// | -> ou

// ----------------------------------------------------------------------------------

// flags
// Por padrão a primeira ocorrência que encontrar será considerada
// g -> global (todas as ocorrências)
// i -> insensitive
const regExp1 = /Joao/gi;
// OBS: Importante saber que letras acentuadas são diferentes

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea provident deserunt ipsum nemo ipsam João, eos quasi molestiae animi est? Nobis, João velit? Velit eius neque joao autem nesciunt laborum joÃo, voluptatem ad?`;

const test = regExp1.test('JoAo'); // true -> pois possui insensitive (não importa se a letra é maiuscula ou minuscula)
// console.log(test);

const test2 = regExp1.test(text); // true
// console.log(test2);

// ----------------------------------------------------------------------------------

// exec

const regExp2 = /cum provident veritatis/i;

const text2 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eaque distinctio vel labore ad cum provident veritatis officia ea, quibusdam minus perferendis, delectus excepturi architecto nostrum, assumenda necessitatibus error nisi.`;

const test3 = regExp2.exec(text2); // retorna um ojeto/array ou null
const test4 = regExp2.exec(text2)[0]; // cum provident veritatis
const test5 = regExp2.exec(text2).index; // 103 -> posição que foi encontrado no texto
// console.log(test5);

// ----------------------------------------------------------------------------------

// separando em grupos

const regExp3 = /(astrônomo)(, mas a aldeia)/i;

const text3 = `Em uma pequena aldeia cercada por florestas densas, vivia um jovem chamado Lucas. Ele sempre fora fascinado pelas estrelas e passava horas a fio observando o céu noturno. Seu sonho era se tornar um astrônomo, mas a aldeia não tinha acesso a muitos recursos educacionais.`;

const found1 = regExp3.exec(text3); // se não encontrar retorna null
const found2 = regExp3.exec(text3)[0]; // astrônomo, mas a aldeia
const found3 = regExp3.exec(text3)[1]; // astrônomo
const found4 = regExp3.exec(text3)[2]; // , mas a aldeia
// console.log(found1);

// ----------------------------------------------------------------------------------

// | -> ou

const regExp4 = /(Alina|Ana|Bia)(, que era)/i;

const text4 = `Um dia, um grupo de viajantes chegou à aldeia. Eles eram comerciantes que vinham de terras distantes e trouxeram consigo histórias de lugares longínquos e conhecimento sobre as estrelas. Lucas ficou encantado com as histórias e fez amizade com um dos viajantes, chamado Alina, que era uma astrônoma experiente.`;

// nesse caso tentará buscar no text uma das seguintes possibilidades:
// Alina, que era uma astrônoma
// Ana, que era uma astrônoma
// Bia, que era uma astrônoma

const found5 = regExp4.exec(text4); // se não encontrar retorna null
console.log(found5);
