const { CityService } = require('../services/index')

const cityService =  new CityService();

// POST -> /city
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Something created a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            data: {},
            succes: false,
            message: "Not able to create a city",
            error: error
        });
    }
}

// DELETE -> /city/:id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Something deleted a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            data: {},
            succes: false,
            message: "Not able to delete a city",
            error: error
        });
    }
}

// GET -> /city/:id
const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched from city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            data: {},
            succes: false,
            message: "Not able to get the city",
            error: error
        });
    }
}

// PATCH -> /city/:id
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Something updated the city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            data: {},
            succes: false,
            message: "Not able to update the city",
            error: error
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update
}