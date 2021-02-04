const { CompanyRepository } = require('../repositories/CompanyRepository');
const Database = require('../../../../../shared/database/create_table');

class UpdateCompanyService {
  async run(cnpj) {
    const db = await Database;

    if (!db) {
      throw new InternalErrors(
        'Ocorreu um erro ao criar cadastro do empregado',
        503,
      );
    }

    const query = `
        SELECT * FROM db_company
        WHERE
        cnpj = ${cnpj}
        `;

    const consult = await db.all(query);

    if (consult < 1) {
      throw new InternalErrors('Empresa inexistente no banco de dados', 400);
    }

    const companyRepository = new CompanyRepository();
    await companyRepository.update(cnpj);
  }
}

module.exports = { UpdateCompanyService };
