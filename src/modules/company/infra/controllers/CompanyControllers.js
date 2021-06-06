const {
  CreateCompanyService,
} = require('../sql/services/CreateCompanyService');
const { ListCompanyService } = require('../sql/services/ListCompanyService');
const {
  UpdateCompanyService,
} = require('../sql/services/UpdateCompanyService');

class CompanyControllers {
  async create(request, response) {
    const { name, cnpj, address, payment } = request.body;

    try {
      const createCompanyService = new CreateCompanyService();
      await createCompanyService.run({ name, cnpj, address, payment });

      return response.status(201).render('company.html', {
        message: 'Cadastro realizado com sucesso!',
      });
    } catch (error) {
      return response.json(error);
    }
  }

  async update(request, response) {
    const { cnpj } = request.body;

    try {
      const listCompanyService = new ListCompanyService();
      await listCompanyService.run(cnpj);

      const updateCompanyService = new UpdateCompanyService();
      await updateCompanyService.run(cnpj);

      return response.status(200).render('company.html', {
        message: 'Empresa desativada com sucesso!!!',
      });
    } catch (error) {
      return response.json(error);
    }
  }
}

module.exports = { CompanyControllers };
