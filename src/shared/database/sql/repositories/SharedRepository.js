const Database = require('../create_table');
const InternalErrors = require('../../../errors/InternalErrors');

class SharedRepository {
  async find(data) {
    const query = `SELECT * FROM db_${data}`;
    try {
      const db = await Database;
      const foundData = await db.all(query);

      if (foundData < 1) {
        throw new InternalErrors(
          'Empresa/Funcionário inexistente no banco de dados',
          400,
        );
      }

      return foundData;
    } catch (error) {
      throw new InternalErrors('Ocorreu um erro ao buscar dados', 400);
    }
  }
}

module.exports = { SharedRepository };
