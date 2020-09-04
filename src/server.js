function callIndex (req,res){
    return res.render("index.html")
}

function callEmployee (req,res){
return res.render("employee.html")
}

function callCompany (req,res){
return res.render("company.html")
}

function callRegister_Employee (req,res){
return res.render("register_employee.html")
}

function callRegister_Company (req,res){
return res.render("reg_company.html")
}

function callAlter_Employee (req,res){
return res.render("alter_employee.html")
}

function callAlter_Company (req,res){
return res.render("alt_company.html")
}

function callMoney (req,res){
return res.render("money.html")
}



const express = require('express')
const server = express()

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
