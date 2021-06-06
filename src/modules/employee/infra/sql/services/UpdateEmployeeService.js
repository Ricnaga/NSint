const { EmployeeRepository } = require('../repositories/EmployeeRepository');
const Database = require('../../../../../shared/database/sql/create_table');
const InternalErrors = require('../../../../../shared/errors/InternalErrors');

class UpdateEmployeeService {
  async run(cpf) {
    const db = await Database;

    if (!db) {
      throw new InternalErrors('Ocorreu no banco de dados', 503);
    }

    const employeeRepository = new EmployeeRepository();
    const findEmployee = await employeeRepository.findByCPF(db, cpf);

    if (!findEmployee.length) {
      throw new InternalErrors('Usuário inexistente no banco de dados', 404);
    }

    await employeeRepository.update(db, cpf);
  }
}

module.exports = { UpdateEmployeeService };
