const Database = require('../create_table');
const insert_db = require('../insert_company');

Database.then(async db => {
  testCompany = {
    name: "Dream Company's",
    cnpj: '22333333202101',
    address: 'Dream street, 123',
    payment: '500000,00',
    account: 's',
  };

  await insert_db(db, testCompany);
});
