const Car = require('../models/carModel');

exports.addCar = async (req, res) => {
    try {
        const newCar = new Car({
            firstName: req.body.firstName,
            familyName: req.body.familyName,
            phone: req.body.phone,
            imageURL: req.body.imageURL,
            bid: req.body.bid
        });

        const savedCar = await newCar.save();
        console.log('Car sent to Database', savedCar);
        res.redirect('/');
    } catch (err) {
        console.error('Error sending to DB', err);
        res.status(500).send('Error saving Car to database');
    }
};

exports.getCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).json(cars);
    } catch (err) {
        console.error('Error fetching information from DB', err);
        res.status(500).send('Error fetching cars from database');
    }
};
