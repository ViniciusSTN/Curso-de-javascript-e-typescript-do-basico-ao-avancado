// site ->  https://regex101.com/

//--------------------------------------------------
// buscar todas palavras de um texto
const allWords = /[\wÀ-ú]+/g

//--------------------------------------------------
// \d -> números
// \D -> não números

// retornar números
const numbers = /\d/g;

const text = `testando 12 núme1ros2`;
// console.log(text.replace(numbers, ''));

//--------------------------------------------------
// Senha forte 
const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[A-Z])(?=.*\d)(?=.*[A-Z])(?=.*[\u0041-\u005A]).{8,50}$/g;
const pass = '@Pfassk09sfaf'
console.log(pass.match(password));

//--------------------------------------------------
// email: (pesquisar na internet em sites confiaveis)
