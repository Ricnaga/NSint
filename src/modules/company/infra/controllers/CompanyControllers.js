const InternalErrors = require('../../../../shared/errors/InternalErrors');

async function show(req, res) {
  return res.render('company.html');
}

async function create(req, res) {
  const { name, cnpj, address, payment } = req.body;
  const Database = require('../../../../shared/database/create_table');
  const insertInDataBase = require('../../../../shared/database/insertCompanyIntoDB');

  const dataCompany = {
    name,
    cnpj,
    address,
    payment,
  };

  try {
    const db = await Database;
    await insertInDataBase(db, dataCompany);

    return res.render('company.html', {
      message: 'Cadastro realizado com sucesso!',
    });
  } catch (error) {
    throw new InternalErrors('Ocorreu um erro ao cadastrar empregado', 400);
  }
}

async function update(req, res) {
  const { cnpj } = req.body;
  const Database = require('../../../../shared/database/create_table');

  const query = `
        SELECT * FROM db_company
        WHERE
        cnpj = ${cnpj}
        `;

  try {
    const db = await Database;
    const consult = await db.all(query);

    if (consult < 1) {
      return res.render('company.html', {
        message: 'Empresa inexistente no banco de dados!!!',
      });
    }

    await db.run(`
            UPDATE db_company
            SET account = 'n'
            WHERE cnpj = ${cnpj}
        `);

    return res.render('company.html', {
      message: 'Empresa desativada com sucesso!!!',
    });
  } catch (error) {
    throw new InternalErrors('Ocorreu um erro ao desativar empregado', 400);
  }
}

module.exports = {
  show,
  create,
  update,
};
