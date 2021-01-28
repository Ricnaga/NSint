const Database = require('../create_table');

Database.then(async db => {
  const updateTable = await db.run(`
        UPDATE db_employee
        SET account = 'n'
        WHERE id = 1
    `);

  console.log(updateTable);

  const consulting = await db.all(`
        SELECT * FROM db_employee
        WHERE
        CPF = 134678`);
  console.log(consulting);
});
