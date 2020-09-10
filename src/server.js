const express = require('express')
const server = express()

const {
    callIndex,
    callEmployee,
    callAlter_Employee,
    callRegister_Employee,
    callCompany,
    callAlter_Company,
    callRegister_Company,
    callMoney
} = require('./routes')

const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,

})

server.use(express.static("public"))
.get("/", callIndex)

.get("/employee", callEmployee)
.get("/register_employee", callRegister_Employee)
.get("/alter_employee", callAlter_Employee)

.get("/company", callCompany)
.get("/reg_company", callRegister_Company)
.get("/alt_company", callAlter_Company)

.get("/money", callMoney)

.listen(5500)
