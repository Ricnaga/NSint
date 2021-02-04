const Database = require('../../../../../shared/database/create_table');

class CompanyRepository {
  async create(companyData) {
    const { name, cnpj, address, payment } = companyData;
    const insertInDataBase = require('../../../../../shared/database/insertCompanyIntoDB');

    const db = await Database;
    await insertInDataBase(db, { name, cnpj, address, payment });
  }

  async update(cnpj) {
    const query = `
        SELECT * FROM db_company
        WHERE
        cnpj = ${cnpj}
        `;

    try {
      const db = await Database;
      const consult = await db.all(query);

      if (consult < 1) {
        throw new InternalErrors('Empresa inexistente no banco de dados', 400);
      }

      await db.run(`
            UPDATE db_company
            SET account = 'n'
            WHERE cnpj = ${cnpj}
        `);
    } catch (error) {
      throw new InternalErrors('Ocorreu um erro ao desativar empregado', 400);
    }
  }
}

module.exports = { CompanyRepository };
