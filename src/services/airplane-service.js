const CrudService = require('./crud-service');
const { AirplaneRepository } = require('../repository/index');

class AirplaneService extends CrudService {

    constructor(){
        const airplaneRepository = new AirplaneRepository();
        super(airplaneRepository);
    }

    async getAll(filter) {
        try {
            this.airplaneRepository = new AirplaneRepository();
            const airplanes = await this.airplaneRepository.getAll(filter);
            return airplanes;
        } catch (error) {
            console.log("Something went wrong inside airplane service");
            throw error;
        }
    }

}

module.exports = AirplaneService;