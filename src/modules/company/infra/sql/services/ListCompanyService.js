const { CompanyRepository } = require('../repositories/CompanyRepository');
const Database = require('../../../../../shared/database/sql/create_table');

class ListCompanyService {
  async run(cnpj) {
    const db = await Database;

    if (!db) {
      throw new InternalErrors(
        'Ocorreu um erro ao acessar o banco de dados',
        400,
      );
    }
    const companyRepository = new CompanyRepository();
    const listCompany = await companyRepository.show(db, cnpj);

    if (listCompany < 1) {
      throw new InternalErrors('Empresa inexistente no banco de dados', 400);
    }
  }
}

module.exports = { ListCompanyService };
