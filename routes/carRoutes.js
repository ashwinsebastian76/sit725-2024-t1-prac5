const express = require('express');
const carController = require('../controllers/carController');

const router = express.Router();

router.post('/addCar', carController.addCar);
router.get('/cars', carController.getCars);

module.exports = router;
