const knex = require('../../knex/config/database')

const select = knex('users')
  .select('id', 'first_name')
  .orderBy('id', 'asc')
  .limit(4)
  .offset(8);

console.log(select.toString());

select.then(data => {
  console.log(data);
}).catch(e => {
  console.log('ERRO:', e.message);
}).finally(() => {
  knex.destroy();
});
