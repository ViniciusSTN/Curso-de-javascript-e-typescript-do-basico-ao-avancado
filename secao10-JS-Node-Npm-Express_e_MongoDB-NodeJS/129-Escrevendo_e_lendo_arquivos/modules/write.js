const fs = require('fs').promises;

// escrever o arquivo
module.exports = (filePath, data) => {
    // escrevendo um arquivo
    // flag: 'w' -> reescrever o arquivo caso ja existir
    // flag: 'a' -> 'concatena'
    fs.writeFile(filePath, data, {flag: 'w'});
};
