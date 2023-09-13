const express = require('express');
const { CityController, AirportController, AirplaneController, FlightController } = require('../../controllers/index')

const router = express.Router();

router.post('/city', CityController.create)
router.delete('/city/:id', CityController.destroy)
router.get('/city/:id', CityController.get)
router.patch('/city/:id', CityController.update)
router.get('/city', CityController.getAll)

router.post('/airports', AirportController.create)
router.delete('/airports/:id', AirportController.destroy)
router.get('/airports/:id', AirportController.get)
router.patch('/airports/:id', AirportController.update)
router.get('/airports', AirportController.getAll)

router.post('/airplanes', AirplaneController.create)
router.delete('/airplanes/:id', AirplaneController.destroy)
router.get('/airplanes/:id', AirplaneController.get)

router.post('/flights', FlightController.create)
router.delete('/flights/:id', FlightController.destroy)
router.get('/flights/:id', FlightController.get)
router.get('/flights', FlightController.getAll)

module.exports = router