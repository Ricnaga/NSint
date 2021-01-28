const Database = require('sqlite-async');

function init(db) {
  return db.exec(`
    CREATE TABLE IF NOT EXISTS db_employee(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        cpf TEXT,
        phone TEXT,
        money DOUBLE,
        admission TEXT,
        job TEXT,
        account CHAR
    );

    CREATE TABLE IF NOT EXISTS db_company(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        cnpj TEXT,
        address TEXT,
        payment DOUBLE,
        account CHAR
    );
    `);
}

module.exports = Database.open(`${__dirname}/database.sqlite`).then(init);
