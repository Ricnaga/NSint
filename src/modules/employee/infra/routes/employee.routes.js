const { Router } = require('express');
const { employeeControllers } = require('../controllers');

const employeeRoutes = Router();

employeeRoutes
  .get('/show', (_, res) => res.render('employee.html'))
  .post('/create', employeeControllers.create)
  .post('/update', employeeControllers.update);

module.exports = {
  employeeRoutes,
};
