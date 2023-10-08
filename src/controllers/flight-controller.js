const { FlightService } = require('../services/index');
const { ClientErrorCodes, SuccessCodes } = require('../utils/error-code')

const flightServie = new FlightService();

const create = async (req, res) => {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const flight = await flightServie.create(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            result: flight,
            success: true,
            message: 'Flight created successfully',
            err: {}
        })
    } catch (error) {
        console.log("Something went wrong inside flight controllers");
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            result: {},
            success: false,
            message: 'Not able to create flight',
            err: error
        })
    }
}

const destroy = async (req, res) => {
    try {
        const response = await flightServie.destroy(req.params.id);
        return res.status(SuccessCodes.CREATED).json({
            data: response,
            success: true,
            message: 'Flight deleted successfully',
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong inside flight controllers");
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            succes: false,
            message: "Not able to delete flight",
            error: error
        });
    }
}

const get = async (req, res) => {
    try {
        const flight = await flightServie.get(req.params.id);
        console.log(flight);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            message: "Get flight successful",
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong inside flight controllers");
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            succes: false,
            message: "Not able to get the flight",
            error: error
        });
    }
}

const getAll = async (req, res) => {
    try{
        const flight = await flightServie.getAll(req.query);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            message: "Get flight successful",
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong inside flight controllers");
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            succes: false,
            message: "Not able to get the flights",
            error: error
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await flightServie.update(req.params.id, req.body);
        return res.status(SuccessCodes.CREATED).json({
            data: response,
            success: true,
            message: "Flight updated successful",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            succes: false,
            message: "Not able to update flight",
            error: error
        });
    }
}

module.exports = {
    create,
    get, 
    destroy, 
    getAll,
    update
}