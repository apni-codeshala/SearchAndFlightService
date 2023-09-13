const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const airport = await airportService.create(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: "Airport created succesfullt",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            data: {},
            succes: false,
            message: "Not able to create airport",
            error: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await airportService.delete(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Airport deleted successful",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            data: {},
            succes: false,
            message: "Not able to delete airport",
            error: error
        });
    }
}

const get = async (req, res) => {
    try {
        const airport = await airportService.get(req.params.id);
        return res.status(200).json({
            data: airport,
            success: true,
            message: "Get airport successful",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            data: {},
            succes: false,
            message: "Not able to get the airport",
            error: error
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await airportService.update(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Airport updated successful",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            data: {},
            succes: false,
            message: "Not able to update airport",
            error: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const airports = await airportService.getAll(req.query);
        return res.status(200).json({
            data: airports,
            success: true,
            message: "Airports fetched successful",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            data: {},
            succes: false,
            message: "Not able to get airport",
            error: error
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}