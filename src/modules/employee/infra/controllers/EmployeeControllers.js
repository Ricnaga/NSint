const InternalErrors = require('../../../../shared/errors/InternalErrors');

async function show(_, res) {
  return res.render('employee.html');
}

async function create(req, res) {
  const { name, cpf, phone, money, admission, job } = req.body;
  const Database = require('../../../../shared/database/create_table');
  const insertInDataBase = require('../../../../shared/database/insertEmployeeIntoDB');

  const dataEmployee = {
    name,
    cpf,
    phone,
    money,
    admission,
    job,
  };

  try {
    const db = await Database;
    await insertInDataBase(db, dataEmployee);

    return res.render('employee.html', {
      message: 'Cadastro realizado com sucesso!',
    });
  } catch (error) {
    throw new InternalErrors(
      'Ocorreu um erro ao criar cadastro da empresa',
      400,
    );
  }
}

async function update(req, res) {
  const { cpf } = req.body;
  const Database = require('../../../../shared/database/create_table');
  const query = `
        SELECT * FROM db_employee
        WHERE
        cpf = ${cpf}
        `;

  try {
    const db = await Database;
    const consult = await db.all(query);

    if (consult < 1) {
      return res.render('employee.html', {
        message: 'Usuário inexistente no banco de dados!!!',
      });
    }

    await db.run(`
            UPDATE db_employee
            SET account = 'n'
            WHERE cpf = ${cpf}
        `);

    return res.render('employee.html', {
      message: 'Usuário desativado com sucesso!!!',
    });
  } catch (error) {
    throw new InternalErrors('Ocorreu um erro ao desativar empresa', 400);
  }
}

module.exports = {
  show,
  create,
  update,
};
