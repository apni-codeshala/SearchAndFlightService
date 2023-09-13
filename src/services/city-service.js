const CrudService = require('./crud-service');
const { CityRepository } = require('../repository/index');

class CityService extends CrudService {

    constructor() {
        const cityRepository = new CityRepository();
        super(cityRepository);
    }

    async getAll(filter){
        try {
            this.cityRepository = new CityRepository();
            const cities = await this.cityRepository.getAll({name: filter.name})
            return cities;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error}
        }
    }

}

module.exports = CityService