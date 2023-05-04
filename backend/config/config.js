const pgp = require('pg-promise')();
// const db = pgp({
//   host: 'localhost',
//   port: 5432,
//   database: 'userDetails',
//   user: 'postgres',
//   password: '1997'
// });
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'groupProject',
  user: 'ProjectOne',
  password: '1234'
});
db.one('SELECT $1 AS value', 'psql running successfully')
  .then((data) => {
    console.log( data.value)
  })
  .catch((error) => {
    console.log('ERROR:', error)
  })