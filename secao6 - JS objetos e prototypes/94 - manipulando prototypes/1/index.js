// new Object 
const objA = {
    chaveA: 'A',
};

const objB = {
    chaveB: 'B',
};

// objB possuirá prototype de A
Object.setPrototypeOf(objB, objA);

// para acessar o prototype de um objeto
console.dir(Object.getPrototypeOf(objB));
console.log(objB.chaveA);

// hierarquia do prototype de objB
// objB --> objA.__proto__ --> Object.prototype
