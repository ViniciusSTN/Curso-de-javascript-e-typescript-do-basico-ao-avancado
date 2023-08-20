// tsconfig.json -> "allowJs": true,

import { soma } from './modulo.js';

// por padrão não infere o tipo, pois essa soma vem de um arquivo js
// para resolver isso: as number
// ou renomeia o arquivo modulo.js para .ts
console.log(soma(1, 2) as number);
