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
    const insertInto = require('./database/test/insert_db')
    
    const dataEmployee = {
        name: req.body.name,
        cpf: req.body.cpf,
        phone: req.body.phone,
        money: req.body.money,
        admission: req.body.admission,
        job: req.body.job,
    }

    try {
        const db = Database;
        await insertInto(db, {dataEmployee})

    } catch (error) {
        console.error(error)
    }

    return res.send(dataEmployee)
}

function callRemove_Employee (req, res){
    return res.send(req.name)
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