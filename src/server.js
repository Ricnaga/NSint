const express = require('express')
const server = express()

const {
    callIndex,
    callEmployee,
    callSignUp_Employee,
    callRemove_Employee,
    callCompany,
    callMoney
} = require('./routes')

const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

server
.use(express.static("public"))
.use(express.urlencoded({extended: true}))
.get("/", callIndex)

.get("/employee", callEmployee)
.post("/signUp_employee", callSignUp_Employee)
.post("/disable_employee", callRemove_Employee)

.get("/company", callCompany)

.get("/money", callMoney)

.listen(5500, () =>{
    console.log("Server localhost:5500 is being watched 👀 !")
})
