const Database = require('../create_table')
const test_insert_db = require('./test_insert_db')

Database.then( async (db) => {
    testEmployee = {
        name: 'ricardo',
        gender: 'masculino',
        rg: '123456789',
        cpf: '12345678912',
        address: 'rua do endereço, 123',
        pis: '98.653.274.1',
        phone: '+55 11 1234-4321',
        ncp: '553269',
        money: 1550.00,
        admssion: '01/08/02020',
        children: 0,
        mail: 'email@email.com',
        job: 'analista de sistemas',
        account: 's',
    }
    
    await test_insert_db(db, { testEmployee })
})


        