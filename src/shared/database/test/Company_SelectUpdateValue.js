const Database = require('../create_table');

Database.then(async db => {
  const updateTable = await db.run(`
        UPDATE db_company
        SET account = 'n'
        WHERE id = 1
    `);

  console.log(updateTable);

  const consulting = await db.all(`
        SELECT * FROM db_company
        WHERE
        CNPJ = 22333333202101`);
  console.log(consulting);
});
