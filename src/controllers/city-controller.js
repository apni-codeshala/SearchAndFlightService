const { CityService } = require('../services/index')

const cityService = new CityService();

// POST -> /city
const create = async (req, res) => {
    try {
        const city = await cityService.create(req.body);
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
        const response = await cityService.destroy(req.params.id);
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
        const response = await cityService.get(req.params.id);
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
        const response = await cityService.update(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated the city",
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

const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAll(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: "Get all the city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            data: {},
            succes: false,
            message: "Not able to get all city",
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