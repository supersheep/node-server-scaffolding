const knex = require('knex')({
  client: 'mysql', //指明数据库类型，还可以是mysql，sqlite3等等
  connection: require('config').mysql
})

module.exports = knex