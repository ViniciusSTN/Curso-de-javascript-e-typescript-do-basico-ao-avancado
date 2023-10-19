const knex = require('../../knex/config/database')

const selectIn = knex('users')
  .select('id', 'first_name')
  .whereIn('id', [10, 15, 20, 252343458]);

console.log(selectIn.toString());

selectIn.then(data => {
  console.log(data);
}).catch(e => {
  console.log('ERRO:', e.message);
}).finally(() => {
  knex.destroy();
});
