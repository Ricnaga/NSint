const Database = require('../create_table');
const insert_db = require('../insert_employee');

Database.then(async db => {
  testEmployee = {
    name: 'Ricardo Naga',
    cpf: '12345678912',
    phone: '+55 11 1234-4321',
    money: 1550.0,
    admission: '2020-08-01',
    job: 'desenvolvedor front end',
    account: 's',
  };

  await insert_db(db, testEmployee);
});
