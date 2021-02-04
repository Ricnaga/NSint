const {
  UpdateEmployeeService,
} = require('../sql/services/UpdateEmployeeService');
const {
  CreateEmployeeService,
} = require('../sql/services/CreateEmployeeService');

class EmployeeControllers {
  async create(dataEmployee) {
    const { name, cpf, phone, money, admission, job } = dataEmployee;
    const createEmployeeService = new CreateEmployeeService();
    await createEmployeeService.run({
      name,
      cpf,
      phone,
      money,
      admission,
      job,
    });
  }

  async update(cpf) {
    const updateEmployeeService = new UpdateEmployeeService();
    await updateEmployeeService.run(cpf);
  }
}

module.exports = { EmployeeControllers };
