const {
  ListAllCompaniesService,
} = require('../../database/sql/services/ListAllCompaniesService');
const {
  ListAllEmployeesService,
} = require('../../database/sql/services/ListAllEmployeesService');

class SharedControllers {
  async show(request, response) {
    const { allData } = request.body;

    try {
      if (allData === 'employee') {
        const listAllEmployeesService = new ListAllEmployeesService();
        const foundOnServices = await listAllEmployeesService.run();

        return { foundOnServices, AllData: 'employee' };
      }

      const listAllCompaniesService = new ListAllCompaniesService();
      const foundOnServices = await listAllCompaniesService.run();

      return { foundOnServices, AllData: 'company' };
    } catch (error) {
      return response.json(error);
    }
  }
}

module.exports = { SharedControllers };
