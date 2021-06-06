const {
  ListAllEmployeesCompaniesService,
} = require('../../database/sql/services/ListAllEmployeesCompaniesService');

class SharedControllers {
  async show(request, response) {
    const { allData } = request.body;

    try {
      const listAll = new ListAllEmployeesCompaniesService();
      const foundOnServices = await listAll.run(allData);

      return response.status(200).render('allData.html', {
        data: foundOnServices,
        setData: allData,
      });
    } catch (error) {
      return response.json(error);
    }
  }
}

module.exports = { SharedControllers };
