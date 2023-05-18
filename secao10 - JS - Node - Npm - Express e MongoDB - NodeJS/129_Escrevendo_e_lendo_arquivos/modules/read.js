const fs = require('fs').promises;

// ler o arquivo
module.exports = (filePath) => fs.readFile(filePath, 'utf8');
