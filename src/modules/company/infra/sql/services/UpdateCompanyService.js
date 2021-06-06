const { CompanyRepository } = require('../repositories/CompanyRepository');
const Database = require('../../../../../shared/database/sql/create_table');
const InternalErrors = require('../../../../../shared/errors/InternalErrors');

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
    const findCompany = await companyRepository.findByCNPJ(db, cnpj);

    if (!findCompany.length) {
      throw new InternalErrors('Empresa inexistente no banco de dados', 404);
    }

    await companyRepository.update(db, cnpj);
  }
}

module.exports = { UpdateCompanyService };
