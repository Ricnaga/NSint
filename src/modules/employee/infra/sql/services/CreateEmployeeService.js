const InternalErrors = require('../../../../../shared/errors/InternalErrors');
const Database = require('../../../../../shared/database/sql/create_table');
const { EmployeeRepository } = require('../repositories/EmployeeRepository');

class CreateEmployeeService {
  async run(dataEmployee) {
    const { name, cpf, phone, money, admission, job } = dataEmployee;

    const db = await Database;

    if (!db) {
      throw new InternalErrors(
        'Ocorreu um erro ao criar cadastro do empregado',
        503,
      );
    }

    const employeeRepository = new EmployeeRepository();
    const findEmployee = await employeeRepository.findByCPF(db, cpf);

    if (findEmployee.length) {
      throw new InternalErrors('Usuário ja existente no banco de dados', 503);
    }

    await employeeRepository.create(db, {
      name,
      cpf,
      phone,
      money,
      admission,
      job,
    });
  }
}

module.exports = { CreateEmployeeService };
