const Database = require('./database/create_table')

function callIndex (req, res){
    return res.render("index.html")
}

function callEmployee (req, res){
    return res.render("employee.html")
}

function callCompany (req, res){
    return res.render("company.html")
}

function callRegister_Employee (req, res){
    return res.render("register_employee.html")
}

function callRegister_Company (req, res){
    return res.render("register_company.html")
}


function callMoney (req,res){
    return res.render("money.html")
}

module.exports = {
    callIndex,
    callEmployee,
    callRegister_Employee,
    callCompany,
    callRegister_Company,
    callMoney
}