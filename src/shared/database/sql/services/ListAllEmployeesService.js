const InternalErrors = require('../../../errors/InternalErrors');
const Database = require('../create_table');
const { SharedRepository } = require('../repositories/SharedRepository');

class ListAllEmployeesService {
  async run() {
    const db = await Database;

    if (!db) {
      throw new InternalErrors(
        'Ocorreu um erro ao criar cadastro dos clientes',
        503,
      );
    }
    const sharedRepository = new SharedRepository();
    const foundOnRepository = await sharedRepository.find('employee');
    return foundOnRepository;
  }
}

module.exports = { ListAllEmployeesService };
