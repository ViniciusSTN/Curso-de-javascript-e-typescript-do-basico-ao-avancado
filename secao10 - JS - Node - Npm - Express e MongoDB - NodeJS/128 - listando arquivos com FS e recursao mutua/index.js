const fs = require('fs').promises;  // fs == file system
const path = require("path");       // path == caminho

// fs.readdir('./')
//     .then(files => console.log(files))
//     .catch(e => console.log(e));

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for (const file of files) {
        // pegar o caminho do diretório atual e atribuir o file nesse caminho
        const fileFullPath = path.resolve(rootDir, file); 
        // console.log(fileFullPath);
        const stats = await fs.stat(fileFullPath);

        // desconsiderar arquivos da pasta \.git e \.node_modules
        if (/\.git/g.test(fileFullPath)) continue;
        if (/\.node_modules/g.test(fileFullPath)) continue;

        // se for pasta, ler arquivos da pasta
        if (stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        // para listar apenas CSS
        // if (!/\.css$/g.test(fileFullPath)) continue;

        console.log(file);
    }
}

readdir('/Users/vinic/Desktop/Cursos/Curso de javascript e typescript do basico ao avancado');

// /Users/vinic/Desktop/Cursos/Curso de javascript e typescript do basico ao avancado/secao10 - JS - Node - Npm - Express e MongoDB - NodeJS
