const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');

const CrudService = require('./crud-service');
const { Op } = require('sequelize')

class FlightService extends CrudService {

    constructor(){
        const flightRepository = new FlightRepository();
        super(flightRepository);
    }

    #createFilter(data){
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }

        if(data.minPrice && data.maxPrice) {
            Object.assign(filter, {
                [Op.and] : [
                    {price: {[Op.lte]: data.maxPrice}},
                    {price: {[Op.gte]: data.minPrice}}
                ]
            });
        }
        else if(data.minPrice) {
            Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
        }
        else if(data.maxPrice) {
            Object.assign(filter, {price: {[Op.lte]: data.maxPrice}});
        }

        return filter;

    }

    async create(data) {
        try {
            this.flightRepository = new FlightRepository();
            this.airplaneRepository = new AirplaneRepository();
            if(!compareTime(data.arrivalTime, data.departureTime)) {
                throw {
                    error: 'Arrival time cannot be less than departure time',
                }
            }
            const airplane = await this.airplaneRepository.get(data.airplaneId);
            const flight = await this.flightRepository.create({
                ...data, totalSeats: airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong inside flight service");
            throw error;
        }
    }

    async getAll(filter) {
        try {
            if(filter) {
                this.flightRepository = new FlightRepository();
                const filterObject = this.#createFilter(filter);
                const flight = await this.flightRepository.getAll(filterObject);
                return flight;
            }
            const flight = await this.flightRepository.getAll();
            return flight;
        } catch (error) {
            console.log("Something went wrong inside flight service");
            throw error;
        }

    }

}

module.exports = FlightService;