const { Router } = require('express');
const CompanyControllers = require('../controllers/CompanyControllers');

const companyRoutes = Router();

companyRoutes
  .get('/show', CompanyControllers.show)
  .post('/create', CompanyControllers.create)
  .post('/update', CompanyControllers.update);

module.exports = {
  companyRoutes,
};
