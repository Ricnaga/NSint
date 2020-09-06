const Database = require('sqlite-async')

function init(db){
    return db.exec(`
    CREATE TABLE IF NOT EXISTS db_employee(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        gender TEXT,
        rg TEXT,
        cpf TEXT,
        address TEXT,
        pis TEXT,
        phone TEXT,
        ncp TEXT,
        money DOUBLE,
        admssion TEXT,
        children INTEGER,
        mail TEXT,
        job TEXT,
        account CHAR
    );

    CREATE TABLE IF NOT EXISTS db_company(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        id_employee INTEGER,
        name TEXT,
        cnpj TEXT,
        iestadual TEXT,
        address TEXT,
        zipcode TEXT,
        payment TEXT,
        account CHAR
    );
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(init)