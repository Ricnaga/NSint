module.exports = async function(db, { testEmployee }){

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
            "${testEmployee.name}",
            "${testEmployee.cpf}",
            "${testEmployee.phone}",
            "${testEmployee.money}",
            "${testEmployee.admission}",
            "${testEmployee.job}",
            "${testEmployee.account}"
        );
    `)
}