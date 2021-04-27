const InternalErrors = require('../../../errors/InternalErrors');
const Database = require('../create_table');
const { SharedRepository } = require('../repositories/SharedRepository');

class ListAllCompaniesService {
  async run() {
    const db = await Database;

    if (!db) {
      throw new InternalErrors(
        'Ocorreu um erro ao criar cadastro dos clientes',
        503,
      );
    }
    const sharedRepository = new SharedRepository();
    const foundOnRepository = await sharedRepository.find('company');
    return foundOnRepository;
  }
}

module.exports = { ListAllCompaniesService };
