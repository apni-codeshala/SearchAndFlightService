const { Airport } = require('../models/index');
const { Op } = require('sequelize');

const CrudRepository = require('./crud-repository')

class AirportRepository extends CrudRepository {

    constructor(){
        super(Airport);
    }

    async getAll(filter){
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