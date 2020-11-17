module.exports = async function(db, employee){

    const insertOnTable = await db.run(`
        INSERT INTO db_employee (
            name,
            cpf,
            phone,
            money,
            admission,
            job,
            account
        ) VALUES (
            "${employee.name}",
            "${employee.cpf}",
            "${employee.phone}",
            "${employee.money}",
            "${employee.admission}",
            "${employee.job}",
            "s"
        );
    `)

}