const { AirplaneService } = require('../services/index');
const { ClientErrorCodes, SuccessCodes } = require('../utils/error-code')

const airplaneService = new AirplaneService();

const create = async (req, res) => {
    try {
        const airplane = await airplaneService.create(req.body);
        return res.status(SuccessCodes.CREATED).json({
            result: airplane,
            success: true,
            message: 'Airplane created successfully',
            err: {}
        })
    } catch (error) {
        console.log("Something went wrong inside airplane controllers");
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            result: {},
            success: false,
            message: 'Not able to create airplane',
            err: error
        })
    }
}

const destroy = async (req, res) => {
    try {
        const response = await airplaneService.destroy(req.params.id);
        return res.status(SuccessCodes.CREATED).json({
            data: response,
            success: true,
            message: 'Airplane deleted successfully',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            succes: false,
            message: "Not able to delete airplane",
            error: error
        });
    }
}

const get = async (req, res) => {
    try {
        const airplane = await airplaneService.get(req.params.id);
        return res.status(SuccessCodes.CREATED).json({
            data: airplane,
            success: true,
            message: "Get airplane successful",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            succes: false,
            message: "Not able to get the airplane",
            error: error
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await airplaneService.update(req.params.id, req.body);
        return res.status(SuccessCodes.CREATED).json({
            data: response,
            success: true,
            message: "Airplane updated successful",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            succes: false,
            message: "Not able to update airplane",
            error: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const airplanes = await airplaneService.getAll(req.query);
        return res.status(SuccessCodes.CREATED).json({
            data: airplanes,
            success: true,
            message: "Airplanes fetched successful",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            succes: false,
            message: "Not able to get airplane",
            error: error
        });
    }
}

module.exports = {
    create,
    get, 
    destroy,
    update,
    getAll
}