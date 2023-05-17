const threeH = 3 * 60 * 60 * 1000; 
const dateUnix = new Date(0 + threeH); // 01/01/1970 Timestamp Unix ou época unix
// console.log(dateUnix.toString()); 

// --------------------------------------------------------------

// 4 formas de usar
// new Date();                                      data atual
// new Date(milliseconds);                          data em ms
// new Date(dateString);                            data string
// new Date(ano, mes, dia, horas, min, seg, ms);

// --------------------------------------------------------------
const date = new Date(2002, 10, 1, 9, 30, 30, 500);
// console.log(date.toString());

// --------------------------------------------------------------
// FORMATO STRING
// ('2019-04-20 20:20:59.500')  ou  ('2019-04-20T20:20:59.500')
const date2 = new Date('2019-04-20 20:20:59.500');
console.log(date2.toString());

console.log('Dia do mês', date2.getDate());
console.log('Mes', date2.getMonth() + 1);       // 0-11
console.log('Ano', date2.getFullYear());
console.log('Horas', date2.getHours());
console.log('Min', date2.getMinutes());
console.log('Seg', date2.getSeconds());
console.log('Ms', date2.getMilliseconds());
console.log('Dia da semana', date2.getDay());   // 0 == domingo ; 6 == sábado
// --------------------------------------------------------------

console.log('Ms Timestamp Unix até agora: ', Date.now());
const date3 = new Date(1678894949747)   // Wed Mar 15 2023 12:42:29 GMT-0300
console.log(date3.toString())     

