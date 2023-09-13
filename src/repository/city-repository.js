const CrudRepository = require('./crud-repository');
const { City } = require('../models/index');

const { Op } = require('sequelize');

class CityRepository extends CrudRepository {

    constructor() {
        super(City);
    }

    async getAll(filter) { 
        try {
            console.log(filter.name);
            if(filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    },
                    include: ["airports"]
                },);
                return cities;
            }
            const cities = await City.findAll({include: ["airports"]});
            return cities;
        } catch (error) {
            console.log("Error occured in the repository layer");
            throw {error};
        }
    }

}

module.exports = CityRepository;