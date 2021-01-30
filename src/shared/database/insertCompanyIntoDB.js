module.exports = async (db, company) => {
  const { name, cnpj, address, payment } = company;
  const insertOnTable = await db.run(`
        INSERT INTO db_company (
          name,
          cnpj,
          address,
          payment,
          account
        ) VALUES (
            "${name}",
            "${cnpj}",
            "${address}",
            "${payment}",
            "s"
        );
    `);
};
