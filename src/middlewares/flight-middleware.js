
const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.departureTime ||
        !req.body.arrivalTime ||
        !req.body.price
    ) {
        // If any of the body parameter is missing then we come inside then terminate the request by returning error
        return res.status(400).json({
            data: {},
            success: false,
            message: 'Invalide reques body to create flight',
            err: 'Missing mandatory properties to create flight'
        });
    }
    next();
}

module.exports = {
    validateCreateFlight
}