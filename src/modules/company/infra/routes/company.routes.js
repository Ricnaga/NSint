const { Router } = require('express');
const { CompanyControllers } = require('../controllers/CompanyControllers');

const companyRoutes = Router();
const companyControllers = new CompanyControllers();

companyRoutes
  .get('/show', (_, res) => {
    return res.render('company.html');
  })
  .post('/create', (req, res) => {
    const { name, cnpj, address, payment } = req.body;
    companyControllers.create({ name, cnpj, address, payment });

    return res.render('company.html', {
      message: 'Cadastro realizado com sucesso!',
    });
  })
  .post('/update', (req, res) => {
    const { cnpj } = req.body;

    companyControllers.update(cnpj);

    return res.render('company.html', {
      message: 'Empresa desativada com sucesso!!!',
    });
  });

module.exports = {
  companyRoutes,
};
