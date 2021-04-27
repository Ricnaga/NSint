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

  .get('/', (req, res) => {
    return res.render('index.html');
  })

  .get('/shared', (_, res) => {
    return res.render('allData.html');
  })

  .post('/show', async (req, res) => {
    const { allData } = req.body;
    const sharedControllers = new SharedControllers();
    const foundOnControllers = await sharedControllers.show(allData);

    return res.render('allData.html', {
      data: foundOnControllers,
      setData: allData,
    });
  });

module.exports = { allRoutes };
