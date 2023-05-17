const fs = require('fs').promises;
const path = require("path");

// fs == file system

// fs.readdir('./')
//     .then(files => console.log(files))
//     .catch(e => console.log(e));

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files);
}

function walk(files) {
    for (const file of files) {
        console.log(file);
    }
}

readdir();
