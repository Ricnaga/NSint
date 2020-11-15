module.exports = async function(db, { Employee }){

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
            '${Employee.name}',
            "${Employee.cpf}",
            "${Employee.phone}",
            "${Employee.money}",
            "${Employee.admission}",
            "${Employee.job}",
            's'
        );
    `)
}