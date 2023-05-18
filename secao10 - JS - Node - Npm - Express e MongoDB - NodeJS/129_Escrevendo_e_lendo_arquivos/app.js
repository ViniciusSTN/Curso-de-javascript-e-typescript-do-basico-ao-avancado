const path = require("path");
const filePath = path.resolve(__dirname, 'test.json');
const write = require('./modules/write');
const read = require('./modules/read');    // retorna uma promise

const people = [
    {name: 'Vinicius'},
    {name: 'Ana'},
    {name: 'Lucas'},
];

// convertendo para json e formatando
const json = JSON.stringify(people, '', 2);

// criando/atualizando arquivo com modulo importado
write(filePath, json);

// lendo arquivo com modulo importado
async function fileRead(filePath) {
    const data = await read(filePath);
    showData(data);
    // return data;
}

function showData(data) {
    data = JSON.parse(data);   // json para objeto
    // console.log(data);
    data.forEach(obj => console.log(obj.name));
}

fileRead(filePath);

// a função assincrona retorna uma promise, por isso é necessário usar .then() para receber dados do retorno dessa função, ou então criar outra função dentro da função assincrona para retornar os dados
// const fileData = fileRead(filePath)
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

// console.log(fileData);

