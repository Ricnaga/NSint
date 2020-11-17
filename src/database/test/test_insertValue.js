const Database = require('../create_table')
const insert_db = require('../insertIntoDB')

Database.then( async (db) => {
    testEmployee = {
        name: 'Ricardo Naga',
        cpf: '12345678912',
        phone: '+55 11 1234-4321',
        money: 1550.00,
        admission: '2020-08-01',
        job: 'desenvolvedor front end',
        account: 's',
    }
    
    //abaixo a função que usa o arquivo test_value_db.js para inserir todos os valores acima no banco de dados
    //será comentado apenas para que a funçãode consulta seja usada, caso necessário reinserir dados acima, descomentar afunção abaixo
    await insert_db(db, { testEmployee })
})
