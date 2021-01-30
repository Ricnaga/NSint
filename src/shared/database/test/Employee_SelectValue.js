const Database = require('../create_table');

Database.then(async db => {
  const consulting = await db.all(`
        SELECT * FROM db_employee
        WHERE
        CPF = 134678`);
  console.log(consulting);
});
