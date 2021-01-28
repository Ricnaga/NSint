const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

const {
  callIndex,
  callEmployee,
  callSignUp_Employee,
  callRemove_Employee,
  callCompany,
  callSignUp_Company,
  callRemove_Company,
  callMoney,
} = require('./routes');

nunjucks.configure('src/views', {
  express: server,
  noCache: true,
});

server
  .use(express.urlencoded({ extended: true }))
  .use(express.static('public'))

  .get('/', callIndex)

  .get('/employee', callEmployee)
  .post('/signUp_employee', callSignUp_Employee)
  .post('/disable_employee', callRemove_Employee)

  .get('/company', callCompany)
  .post('/signUp_company', callSignUp_Company)
  .post('/disable_company', callRemove_Company)

  .get('/money', callMoney)

  .listen(5500, () => {
    console.log(
      "👀 Server localhost:5500 is being watched - 'Quis custodiet ipsos custodes? 🤔'!",
    );
  });
