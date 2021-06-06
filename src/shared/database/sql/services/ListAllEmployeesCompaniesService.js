const InternalErrors = require('../../../errors/InternalErrors');
const Database = require('../create_table');
const { SharedRepository } = require('../repositories/SharedRepository');

class ListAllEmployeesCompaniesService {
  async run(employeeOrCompany) {
    const db = await Database;

    if (!db) {
      throw new InternalErrors(
        'Ocorreu um erro ao criar cadastro dos clientes/usuários',
        503,
      );
    }
    const sharedRepository = new SharedRepository();
    const foundOnRepository = await sharedRepository.find(
      db,
      employeeOrCompany,
    );

    if (foundOnRepository < 1) {
      throw new InternalErrors(
        'clientes/usuários inexistente no banco de dados',
      );
    }

    return foundOnRepository;
  }
}

module.exports = { ListAllEmployeesCompaniesService };
