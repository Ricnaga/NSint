const {
  UpdateEmployeeService,
} = require('../sql/services/UpdateEmployeeService');
const {
  CreateEmployeeService,
} = require('../sql/services/CreateEmployeeService');

const { ListEmployeeService } = require('../sql/services/ListEmployeeService');

class EmployeeControllers {
  async create(request, response) {
    const { name, cpf, phone, money, admission, job } = request.body;

    try {
      const createEmployeeService = new CreateEmployeeService();
      await createEmployeeService.run({
        name,
        cpf,
        phone,
        money,
        admission,
        job,
      });

      return response.status(201).render('employee.html', {
        message: 'Cadastro realizado com sucesso!',
      });
    } catch (error) {
      return response.json(error);
    }
  }

  async update(request, response) {
    const { cpf } = request.body;

    try {
      const listEmployeeService = new ListEmployeeService();
      await listEmployeeService.run(cpf);

      const updateEmployeeService = new UpdateEmployeeService();
      await updateEmployeeService.run(cpf);

      return response.status(201).render('employee.html', {
        message: 'Usuário desativado com sucesso!!!',
      });
    } catch (error) {
      return response.json(error);
    }
  }
}

module.exports = { EmployeeControllers };
