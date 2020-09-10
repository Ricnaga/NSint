module.exports = async function(db, { testEmployee }){

    const insertOnTable = await db.run(`
        INSERT INTO db_employee (
            name,
            gender,
            rg,
            cpf,
            address,
            pis,
            phone,
            ncp,
            money,
            admssion,
            children,
            mail,
            job,
            account
        ) VALUES (
            "${testEmployee.name}",
            "${testEmployee.gender}",
            "${testEmployee.rg}",
            "${testEmployee.cpf}",
            "${testEmployee.address}",
            "${testEmployee.pis}",
            "${testEmployee.phone}",
            "${testEmployee.ncp}",
            "${testEmployee.money}",
            "${testEmployee.admssion}",
             ${testEmployee.children},
            "${testEmployee.mail}",
            "${testEmployee.job}",
            "${testEmployee.account}"
        );
    `)
}