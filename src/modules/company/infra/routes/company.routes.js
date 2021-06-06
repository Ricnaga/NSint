const { Router } = require('express');
const { companyControllers } = require('../controllers');

const companyRoutes = Router();

companyRoutes
  .get('/show', (_, res) => res.render('company.html'))
  .post('/create', companyControllers.create)
  .post('/update', companyControllers.update);

module.exports = {
  companyRoutes,
};
