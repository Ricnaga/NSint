const Database = require('./database/create_table')

function callIndex (req, res){
    return res.render("index.html")
}

function callEmployee (req, res){
    return res.render("employee.html")
}

function callCompany (req, res){
    return res.render("arquivo company . html")
}

async function callSignUp_Employee (req, res){
    const insertInDataBase = require('./database/test/insert_db')
    
    const dataEmployee = {
        name: req.body.name,
        cpf: req.body.cpf,
        phone: req.body.phone,
        money: req.body.money,
        admission: req.body.admission,
        job: req.body.job,
    }

    try {
        const db = await Database;
        await insertInDataBase(db, dataEmployee)

    } catch (error) {
        console.error(error)
    }
    
    return res.render('employee.html', {message: "Cadastro realizado com sucesso!"})
}

async function callListEmployee(){

}

async function callRemove_Employee (req, res){
    try {
        
    } catch (error) {
        console.error(error)
    }

    return res.render('employee.html')
}


function callMoney (req,res){
    return res.render("money.html")
}

module.exports = {
    callIndex,
    callEmployee,
    callSignUp_Employee,
    callListEmployee,
    callRemove_Employee,
    callCompany,
    callMoney
}