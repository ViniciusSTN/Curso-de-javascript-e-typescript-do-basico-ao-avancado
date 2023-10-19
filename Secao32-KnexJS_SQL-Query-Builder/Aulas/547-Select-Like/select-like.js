const knex = require('../../knex/config/database')

const selectLike = knex('users')
  .select('id', 'first_name')
  .where('first_name', 'like', '%a%')
  .andWhere('first_name', 'like', '____');

console.log(selectLike.toString());

selectLike.then(data => {
  console.log(data);
}).catch(e => {
  console.log('ERRO:', e.message);
}).finally(() => {
  knex.destroy();
});
