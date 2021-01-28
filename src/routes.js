const Database = require('./database/create_table');

function callIndex(req, res) {
  return res.render('index.html');
}

function callEmployee(req, res) {
  return res.render('employee.html');
}

function callCompany(req, res) {
  return res.render('company.html');
}

async function callSignUp_Employee(req, res) {
  const { name, cpf, phone, money, admission, job } = req.body;
  const insertInDataBase = require('./database/insertEmployeeIntoDB');

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
    console.error(error);
  }
}

async function callRemove_Employee(req, res) {
  const { cpf } = req.body;

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
    console.error(error);
  }
}

async function callSignUp_Company(req, res) {
  const { name, cnpj, address, payment } = req.body;
  const insertInDataBase = require('./database/insertCompanyIntoDB');

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
    console.error(error);
  }
}

async function callRemove_Company(req, res) {
  const { cnpj } = req.body;

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
    console.error(error);
  }
}

function callMoney(req, res) {
  return res.render('money.html');
}

module.exports = {
  callIndex,
  callEmployee,
  callSignUp_Employee,
  callRemove_Employee,
  callCompany,
  callSignUp_Company,
  callRemove_Company,
  callMoney,
};
