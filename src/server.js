const express = require('express')
const server = express()

const {
    callIndex,
    callEmployee,
    callRegister_Employee,
    callCompany,
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
.get("/regEmployee", callRegister_Employee)

.get("/company", callCompany)
.get("/regCompany", callRegister_Company)

.get("/money", callMoney)

.listen(5500)
