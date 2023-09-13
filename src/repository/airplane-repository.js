const { Airplane } = require('../models/index');
const CrudRepository = require('./crud-repository');

const { Op } = require('sequelize');

class AirplaneRepository extends CrudRepository {

    constructor(){
        super(Airplane);
    }

    async getAll(filter) {
        try {
            if(filter.name){
                const airplanes = await Airplane.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    },
                });
                return airplanes;
            }
            const airplanes = await Airplane.findAll();
            return airplanes;
        } catch (error) {
            console.log("Something went wrong at airplane repositiory");
            throw {error};
        }
    }

}

module.exports = AirplaneRepository;