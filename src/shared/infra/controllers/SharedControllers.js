const {
  ListAllCompaniesService,
} = require('../../database/sql/services/ListAllCompaniesService');
const {
  ListAllEmployeesService,
} = require('../../database/sql/services/ListAllEmployeesService');

class SharedControllers {
  async show(data) {
    if (data === 'employee') {
      const listAllEmployeesService = new ListAllEmployeesService();
      const foundOnServices = await listAllEmployeesService.run();

      return foundOnServices;
    }

    const listAllCompaniesService = new ListAllCompaniesService();
    const foundOnServices = await listAllCompaniesService.run();

    return foundOnServices;
  }
}

module.exports = { SharedControllers };
