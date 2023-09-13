const { Flight } = require('../models/index');
const CrudRepository = require('./crud-repository');
const AirplaneRepository = require('./airport-repository');

class FlightRepository extends CrudRepository {

    constructor(){
        super(Flight)
    }

    async getAll(filter) {
        try {
            const flight = await Flight.findAll({
                where: filter
            })
            return flight
        } catch (error) {
            console.log("Something went wrong inside flight repository");
            throw error;
        }
    }

}

module.exports = FlightRepository;