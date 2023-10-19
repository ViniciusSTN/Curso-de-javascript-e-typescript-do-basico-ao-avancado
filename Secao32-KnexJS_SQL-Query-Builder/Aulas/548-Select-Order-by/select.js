const knex = require('../../knex/config/database')

const select = knex('users')
  .select('id', 'first_name')
  .where('first_name', 'like', '%a%')
  .andWhere('first_name', 'like', '____')
  .orderBy('id', 'asc');

console.log(select.toString());

select.then(data => {
  console.log(data);
}).catch(e => {
  console.log('ERRO:', e.message);
}).finally(() => {
  knex.destroy();
});
