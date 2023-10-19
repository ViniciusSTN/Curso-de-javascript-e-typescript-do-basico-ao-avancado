/*
select * from users
where 
created_at < '2020-12-15 23:33:41'
and first_name = 'Luiz' 
and password_hash = 'a_hash';
*/
const knex = require('../../knex/config/database');

// EXISTEM ALGUMAS FORMAS DE FAZER O WHERE

// 1
// const select = knex('users').select('id', 'first_name')
//   .where('id', '=', 1);

// 2
// const select = knex('users').select('id', 'first_name')
//   .where({ id: 1, first_name: 'Vinicius' }); // id = 10 and first_name = 'Vinicius'

// 3
const select = knex('users').select('id', 'first_name')
  .where('id', '=', 10)
  .andWhere('first_name', '=', 'Helena')
  .orWhere('id', '=', 11)
  .where('id', '=', '20');

// Ver outras consultas usando where
// ex: whereBetween

console.log(select.toString());

select.then(data => {
  console.log(data);
}).catch(e => {
  console.log('ERRO:', e.message);
}).finally(() => {
  knex.destroy();
});
