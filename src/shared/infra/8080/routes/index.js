const { Router } = require('express');
const {
  employeeRoutes,
} = require('../../../../modules/employee/infra/routes/employee.routes');
const {
  companyRoutes,
} = require('../../../../modules/company/infra/routes/company.routes');

const { sharedControllers } = require('../../controllers');

const allRoutes = Router();

allRoutes
  .use('/employee', employeeRoutes)
  .use('/company', companyRoutes)

  .get('/', (_, res) => res.render('index.html'))
  .get('/shared', (_, res) => res.render('allData.html'))
  .post('/show', sharedControllers.show);

module.exports = { allRoutes };
