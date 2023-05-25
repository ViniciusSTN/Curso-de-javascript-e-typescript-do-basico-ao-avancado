// caso houver problema de compatibilidade de promises com navegadores antigos, usar:
import 'core-js/stable';    
import 'regenerator-runtime/runtime';   // aparentemente n é mais necessario o uso do regenerator-runtime

// ------------------------------------------------------
import executa from './modules/promises';

import './assets/css/style.css';

executa();

