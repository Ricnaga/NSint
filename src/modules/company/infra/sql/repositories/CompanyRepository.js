class CompanyRepository {
  async create(db, companyData) {
    const { name, cnpj, address, payment } = companyData;
    const createCompany = require('../../../../../shared/database/sql/insert_company');

    await createCompany(db, { name, cnpj, address, payment });
  }

  async findByCNPJ(db, cnpj) {
    const query = `
        SELECT * FROM db_company
        WHERE
        cnpj = ${cnpj}
        `;

    const listCompany = await db.all(query);
    return listCompany;
  }

  async update(db, cnpj) {
    await db.run(`
            UPDATE db_company
            SET account = 'n'
            WHERE cnpj = ${cnpj}
        `);
  }
}

module.exports = { CompanyRepository };
