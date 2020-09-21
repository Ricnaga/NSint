const Database = require('../create_table')
const test_insert_db = require('./test_insert_db')

Database.then( async (db) => {
    testEmployee = {
        name: 'Ricardo Naga',
        gender: 'masculino',
        rg: '123456789',
        cpf: '12345678912',
        address: 'rua do endereço, 123',
        pis: '98.653.274.1',
        phone: '+55 11 1234-4321',
        ncp: '553269',
        money: 1550.00,
        admission: '01/08/02020',
        situation: 'solteiro',
        children: 0,
        mail: 'email@email.com',
        job: 'desenvolvedor front end',
        account: 's',
    }
    
    //abaixo a função que usa o arquivo test_value_db.js para inserir todos os valores acima no banco de dados
    //será comentado apenas para que a funçãode consulta seja usada, caso necessário reinserir dados acima, descomentar afunção abaixo
    await test_insert_db(db, { testEmployee })

    //função abaixo realiza consulta na tabela db_employee
    const consulting = await db.all('SELECT * FROM db_employee')
    console.log(consulting)
})
