const { EmployeeRepository } = require('../repositories/EmployeeRepository');
const Database = require('../../../../../shared/database/create_table');

class UpdateEmployeeService {
  async run(cpf) {
    const db = await Database;

    if (!db) {
      throw new InternalErrors(
        'Ocorreu um erro ao criar cadastro do empregado',
        503,
      );
    }

    const query = `
          SELECT * FROM db_employee
          WHERE
          cpf = ${cpf}
          `;

    const consult = await db.all(query);

    if (consult < 1) {
      throw new InternalErrors('Usuário inexistente no banco de dados!!!', 400);
    }

    const employeeRepository = new EmployeeRepository();
    await employeeRepository.update(cpf);
  }
}

module.exports = { UpdateEmployeeService };
