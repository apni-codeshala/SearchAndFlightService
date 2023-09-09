const { Airport, City } = require('../models/index');
const { Op } = require('sequelize');

class AirportRepository {

    async createAirport({name, address, cityId}){
        try {
            const airport = await Airport.create({
                name: name,
                address: address,
                cityId: cityId
            })
            return airport;
        } catch (error) {
            console.log("Something went wrong at airport repositiory");
            throw {error};
        }
    }

    async deleteAirport(airportId){
        try {
            await Airport.destroy({
                where: {
                    id: airportId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong at airport repositiory");
            throw {error};
        }
    }

    async updateAirport(airportId, data){
        try {
            await Airport.update(data, {
                where: {
                    id: airportId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong at airport repositiory");
            throw {error};
        }
    }

    async getAirport(airportId){
        try {
            const airport = await Airport.findByPk(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong at airport repositiory");
            throw {error};
        }
    }

    async getAllAirport(filter){
        try {
            if(filter.name){
                const airports = await Airport.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    },
                });
                return airports;
            }
            const airports = await Airport.findAll();
            return airports;
        } catch (error) {
            console.log("Something went wrong at airport repositiory");
            throw {error};
        }
    }

}

module.exports = AirportRepository;