const { EmployeeRepository } = require('../repositories/EmployeeRepository');
const Database = require('../../../../../shared/database/sql/create_table');

class UpdateEmployeeService {
  async run(cpf) {
    const db = await Database;

    if (!db) {
      throw new InternalErrors('Ocorreu no banco de dados', 503);
    }

    const employeeRepository = new EmployeeRepository();
    await employeeRepository.update(db, cpf);
  }
}

module.exports = { UpdateEmployeeService };
