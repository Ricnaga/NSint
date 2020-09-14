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
    return res.render("reg_company.html")
}

async function callAlter_Employee (req, res){
    const filters = req.query

    if(!filters.cpf){
        return res.render('alter_employee.html')
    }

    const query = `
    SELECT * FROM db_employee 
    WHERE cpf = ${filters.cpf};
    `
    
    try {
        const db = await Database
        const employeejs = await db.all(query)

        return res.render('alter_employee.html', {employeejs})
        
    } catch (error) {
        console.log(error)        
    }
    
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