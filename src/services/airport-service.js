const { AirportRepository } = require('../repository/index')
const CrudService = require('./crud-service');

class AirportService extends CrudService {

    constructor(){
        const airportRepositiory = new AirportRepository();
        super(airportRepositiory)
    }

    async getAll(filter){
        try {
            this.airportRepositiory = new AirportRepository();
            const airport = this.airportRepositiory.getAll(filter);
            return airport;
        } catch (error) {
            console.log("Something went wrong at airport service");
            throw {error};
        }
    }

}

module.exports = AirportService;