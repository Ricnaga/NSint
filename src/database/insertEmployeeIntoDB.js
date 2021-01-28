module.exports = async function (db, employee) {
  const { name, cpf, phone, money, admission, job } = employee;
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
            "${name}",
            "${cpf}",
            "${phone}",
            "${money}",
            "${admission}",
            "${job}",
            "s"
        );
    `);
};
