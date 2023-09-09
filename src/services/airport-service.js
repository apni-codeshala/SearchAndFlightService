const { AirportRepository } = require('../repository/index')

class AirportService {

    constructor(){
        this.airportRepositiory = new AirportRepository();
    }

    async createAirport(data){
        try {
            const airport = await this.airportRepositiory.createAirport(data);
            return airport;
        } catch (error) {
            console.log("Something went wrong at airport service");
            throw {error};
        }
    }

    async deleteAirport(airportId){
        try {
            const response = await this.airportRepositiory.deleteAirport(airportId);
            return response;
        } catch (error) {
            console.log("Something went wrong at airport service");
            throw {error};
        }
    }

    async updateAirport(airportId, data){
        try {
            const response = await this.airportRepositiory.updateAirport(airportId, data);
            return response;
        } catch (error) {
            console.log("Something went wrong at airport service");
            throw {error};
        }
    }

    async getAirport(airportId){
        try {
            const airport = this.airportRepositiory.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong at airport service");
            throw {error};
        }
    }

    async getAllAirport(filter){
        try {
            const airport = this.airportRepositiory.getAllAirport(filter);
            return airport;
        } catch (error) {
            console.log("Something went wrong at airport service");
            throw {error};
        }
    }

}

module.exports = AirportService;