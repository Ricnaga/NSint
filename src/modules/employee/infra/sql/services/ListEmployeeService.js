const InternalErrors = require('../../../../../shared/errors/InternalErrors');
const Database = require('../../../../../shared/database/sql/create_table');
const { EmployeeRepository } = require('../repositories/EmployeeRepository');

class ListEmployeeService {
  async run(cpf) {
    const db = await Database;

    if (!db) {
      throw new InternalErrors(
        'Ocorreu um erro ao criar cadastro do empregado',
        503,
      );
    }

    const employeeRepository = new EmployeeRepository();
    const foundEmployee = await employeeRepository.findByCPF(db, cpf);

    if (foundEmployee < 1) {
      throw new InternalErrors('Não foi possível localizar funcionário', 404);
    }
  }
}

module.exports = { ListEmployeeService };
