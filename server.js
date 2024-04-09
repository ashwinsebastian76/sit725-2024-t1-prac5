var express = require("express")
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

var app = express()
var port = process.env.port || 1000;

mongoose.connect('mongodb+srv://ashwinsebastian76:ashwin12345@sit725.jctfcnw.mongodb.net/?retryWrites=true&w=majority&appName=SIT725');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const carSchema = new mongoose.Schema({
    firstName: String,
    familyName: String,
    phone: String,
    imageURL: String,
    bid: String
  });

  
const car = mongoose.model('Cars', carSchema);

app.post('/addCar', (req, res) => {
    const newCar = new car({
      firstName: req.body.firstName,
      familyName: req.body.familyName,
      phone: req.body.phone,
      imageURL: req.body.imageURL,
      bid: req.body.bid,

    });
  
    newCar.save()
      .then(savedCar => {
        console.log('Car send to Dataabse', savedCar);
        res.redirect('/');
      })
      .catch(err => {
        console.error('Error sending to DB', err);
        res.status(500).send('Error saving Car to database');
      });
  });

  app.get('/api/cars', async (req, res) => {
    try {
        const cars = await car.find();
        res.status(200).json(cars);
    } catch (err) {
        console.error('Error fetching information from DB', err);
    }
  });

app.listen(port,()=>{
console.log("App running on "+port)
})
