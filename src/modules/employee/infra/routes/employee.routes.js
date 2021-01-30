const { Router } = require('express');
const EmployeeControllers = require('../controllers/EmployeeControllers');

const employeeRoutes = Router();

employeeRoutes
  .get('/show', EmployeeControllers.show)
  .post('/create', EmployeeControllers.create)
  .post('/update', EmployeeControllers.update);

module.exports = {
  employeeRoutes,
};
