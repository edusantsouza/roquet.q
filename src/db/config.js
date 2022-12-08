const sqlite3 = require('sqlite3')
const { open, Database } = require('sqlite')

module.exports = () =>
open({
  filename: './src/db/rocketq.sqlite',
  driver: sqlite3.Database,
})