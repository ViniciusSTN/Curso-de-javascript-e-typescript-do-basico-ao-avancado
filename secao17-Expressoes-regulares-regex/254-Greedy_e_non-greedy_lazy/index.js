const html = '<h1>olá</h1>  <h2>olá novamente</h2>';

// . -> qualquer caractere exceto quebra de linha

// selecionar: <*>*</*>

// greedy:
const regExp1 = /<.+>.+<\/.+>/g;
const found1 = html.match(regExp1); // [ '<h1>olá</h1>  <h2>olá novamente</h2>' ]
// nesse caso tem um comportamento greedy (ambicioso), pois não separa os conteudos



// non-greedy:
const regExp2 = /<.+?>.+?<\/.+?>/g;
const found2 = html.match(regExp2); // [ '<h1>olá</h1>', '<h2>olá novamente</h2>' ]

console.log(found1);
console.log(found2);
