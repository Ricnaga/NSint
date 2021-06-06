const { Router } = require('express');
const { CompanyControllers } = require('../controllers/CompanyControllers');

const companyRoutes = Router();
const companyControllers = new CompanyControllers();

companyRoutes
  .get('/show', (_, res) => res.render('company.html'))
  .post('/create', companyControllers.create)
  .post('/update', companyControllers.update);

module.exports = {
  companyRoutes,
};
