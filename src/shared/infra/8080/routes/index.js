const { Router } = require('express');
const {
  employeeRoutes,
} = require('../../../../modules/employee/infra/routes/employee.routes');
const {
  companyRoutes,
} = require('../../../../modules/company/infra/routes/company.routes');

const { SharedControllers } = require('../../controllers/SharedControllers');

const allRoutes = Router();

allRoutes
  .use('/employee', employeeRoutes)
  .use('/company', companyRoutes)

  .get('/', (_, res) => res.render('index.html'))

  .get('/shared', (_, res) => res.render('allData.html'))

  .post('/show', async (req, res) => {
    const sharedControllers = new SharedControllers();
    const { foundOnServices, AllData } = await sharedControllers.show(req, res);

    return res.render('allData.html', {
      data: foundOnServices,
      setData: AllData,
    });
  });

module.exports = { allRoutes };
