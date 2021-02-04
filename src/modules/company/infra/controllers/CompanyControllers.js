const {
  CreateCompanyService,
} = require('../sql/services/CreateCompanyService');
const {
  UpdateCompanyService,
} = require('../sql/services/UpdateCompanyService');

class CompanyControllers {
  async create(companyData) {
    const { name, cnpj, address, payment } = companyData;
    const createCompanyService = new CreateCompanyService();
    await createCompanyService.run({ name, cnpj, address, payment });
  }

  async update(cnpj) {
    const updateCompanyService = new UpdateCompanyService();
    await updateCompanyService.run(cnpj);
  }
}

module.exports = { CompanyControllers };
