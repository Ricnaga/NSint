const { CompanyRepository } = require('../repositories/CompanyRepository');
const Database = require('../../../../../shared/database/sql/create_table');

class UpdateCompanyService {
  async run(cnpj) {
    const db = await Database;

    if (!db) {
      throw new InternalErrors(
        'Ocorreu um erro ao acessar o banco de dados',
        400,
      );
    }
    const companyRepository = new CompanyRepository();
    await companyRepository.update(db, cnpj);
  }
}

module.exports = { UpdateCompanyService };
