const { Router } = require('express');
const { EmployeeControllers } = require('../controllers/EmployeeControllers');

const employeeControllers = new EmployeeControllers();

const employeeRoutes = Router();

employeeRoutes
  .get('/show', (_, res) => {
    return res.render('employee.html');
  })

  .post('/create', (req, res) => {
    const { name, cpf, phone, money, admission, job } = req.body;
    employeeControllers.create({
      name,
      cpf,
      phone,
      money,
      admission,
      job,
    });

    return res.render('employee.html', {
      message: 'Cadastro realizado com sucesso!',
    });
  })

  .post('/update', (req, res) => {
    const { cpf } = req.body;

    employeeControllers.update(cpf);

    return res.render('employee.html', {
      message: 'Usuário desativado com sucesso!!!',
    });
  });

module.exports = {
  employeeRoutes,
};
