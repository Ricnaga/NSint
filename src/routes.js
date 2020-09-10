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
    console.log(req.query)
return res.render("register_employee.html")
}

function callRegister_Company (req, res){
return res.render("reg_company.html")
}

function callAlter_Employee (req, res){
return res.render("alter_employee.html")
}

function callAlter_Company (req, res){
return res.render("alt_company.html")
}

function callMoney (req,res){
return res.render("money.html")
}

module.exports = {
    callIndex,
    callEmployee,
    callAlter_Employee,
    callRegister_Employee,
    callCompany,
    callAlter_Company,
    callRegister_Company,
    callMoney
}