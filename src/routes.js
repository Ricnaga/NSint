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
    const insertInDataBase = require('./database/insertIntoDB')
    
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

        return res.render('employee.html', 
        {
            message: "Cadastro realizado com sucesso!"
        })

    } catch (error) {
        console.error(error)
    }
    
    
}

async function callRemove_Employee (req, res){
    
    const query = `
        SELECT * FROM db_employee 
        WHERE 
        cpf = ${req.body.cpf}
        `
    
    try {
        const db = await Database
        const consult = await db.all(query)

        if(consult < 1){
            return res.render('employee.html', 
            {
                message: "Usuário inexistente no banco de dados!!!"
            })
        }

        await db.run(`
            UPDATE db_employee 
            SET account = 'n'
            WHERE cpf = ${req.body.cpf}
        `)

        return res.render('employee.html', 
        {
            message: "Usuário desativado com sucesso!!!"
        })
        
    } catch (error) {
        console.error(error)
    }
    
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