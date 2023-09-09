const { City } = require('../models/index')
const { Op } = require('sequelize');

 class CityRepository{

    // Function to create city, with making contact with model 
    async createCity({name}) {
        try {
            const city = await City.create({
                name
            });
            return city;
        } catch (error) {
            console.log("Error occured in the repository layer");
            throw {error};
        }
    }

    // Function to delete city, with making contact with model 
    async deleteCity(cityId){
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Error occured in the repository layer");
            throw {error};
        }
    }

    // Function to update city, with making contact with model
    async updateCity(cityId, data){
        try {
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            });
            return city;
        } catch (error) {
            console.log("Error occured in the repository layer");
            throw {error};
        }
    }

    // Function to get city, with making contact with model
    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId, {include: ["airports"]});
            return city;
        } catch (error) {
            console.log("Error occured in the repository layer");
            throw {error};
        }
    }

    async getAllCities(filter) { 
        // Filter can be empty also
        try {
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