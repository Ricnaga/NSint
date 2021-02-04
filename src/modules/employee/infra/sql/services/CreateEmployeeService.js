const InternalErrors = require('../../../../../shared/errors/InternalErrors');
const Database = require('../../../../../shared/database/create_table');
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
    await employeeRepository.create({
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
