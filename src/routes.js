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

async function callSignUp_Employee (req, res){
    return res.send("Siiiimmmm")
}

function callRemove_Employee (req, res){
    return res.send("Siiiimmmm")
}


function callMoney (req,res){
    return res.render("money.html")
}

module.exports = {
    callIndex,
    callEmployee,
    callSignUp_Employee,
    callRemove_Employee,
    callCompany,
    callMoney
}