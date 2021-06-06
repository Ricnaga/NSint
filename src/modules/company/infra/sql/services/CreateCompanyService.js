const InternalErrors = require('../../../../../shared/errors/InternalErrors');
const Database = require('../../../../../shared/database/sql/create_table');
const { CompanyRepository } = require('../repositories/CompanyRepository');

class CreateCompanyService {
  async run(companyData) {
    const { name, cnpj, address, payment } = companyData;

    const db = await Database;

    if (!db) {
      throw new InternalErrors(
        'Ocorreu um erro ao criar cadastro dos clientes',
        400,
      );
    }

    const companyRepository = new CompanyRepository();
    const findCompany = await companyRepository.findByCNPJ(db, cnpj);

    if (findCompany.length) {
      throw new InternalErrors('Empresa ja cadastrada no banco de dados');
    }

    await companyRepository.create(db, { name, cnpj, address, payment });
  }
}

module.exports = { CreateCompanyService };
