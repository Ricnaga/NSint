const Database = require('../../../../../shared/database/sql/create_table');

class EmployeeRepository {
  async create(dataEmployee) {
    const { name, cpf, phone, money, admission, job } = dataEmployee;
    const insertInDataBase = require('../../../../../shared/database/sql/insert_employee');

    const db = await Database;
    await insertInDataBase(db, { name, cpf, phone, money, admission, job });
  }

  async update(cpf) {
    const db = await Database;

    await db.run(`
              UPDATE db_employee
              SET account = 'n'
              WHERE cpf = ${cpf}
          `);
  }
}

module.exports = { EmployeeRepository };