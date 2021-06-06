class EmployeeRepository {
  async create(db, dataEmployee) {
    const { name, cpf, phone, money, admission, job } = dataEmployee;
    const createEmployee = require('../../../../../shared/database/sql/insert_employee');

    await createEmployee(db, { name, cpf, phone, money, admission, job });
  }

  async update(db, cpf) {
    await db.run(`
              UPDATE db_employee
              SET account = 'n'
              WHERE cpf = ${cpf}
          `);
  }

  async findByCPF(db, cpf) {
    const query = `
        SELECT * FROM db_employee
        WHERE
        cpf = ${cpf}
        `;

    const listEmployee = await db.all(query);
    return listEmployee;
  }
}

module.exports = { EmployeeRepository };
