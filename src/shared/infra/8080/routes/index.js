const { Router } = require('express');
const {
  employeeRoutes,
} = require('../../../../modules/employee/infra/routes/employee.routes');
const {
  companyRoutes,
} = require('../../../../modules/company/infra/routes/company.routes');

const allRoutes = Router();

allRoutes
  .use('/employee', employeeRoutes)
  .use('/company', companyRoutes)

  .get('/', (req, res) => {
    return res.render('index.html');
  });

module.exports = { allRoutes };
