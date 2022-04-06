const db = require('../models')


// create car Model.
const User = db.users
const Car = db.cars
const carAvailability = db.car_availability

// car work

//CAR CRUD
// create car
const addCar =  async (req,res) => {

    let info = {
        id: req.body.id,
        brand: req.body.brand,
        door_num:req.body.door_num,
        year:req.body.year,
        color: req.body.color,
        model_name: req.body.model_name,
        mode:req.body.mode,
        plate_number: req.body.plate_number,
        user_id: req.body.user_id,
        location_latitudes: req.body.location_latitudes,
        location_longitude: req.body.location_longitude,
        day_price: req.body.day_price,
        is_featured: req.body.is_featured ? req.body.is_featured: false
        
    }

    //using sequalizer to create the car.
    const car = await Car.create(info)
    //check if the car is created
    res.status(200).send(car)
    console.log(car)
}

// get all cars
const getAllCars = async (req,res) => {
    let cars = await Car.findAll({})
    res.send(cars)
}

// get a single car
const getOneCar = async (req,res) => {
    let id = req.params.id
    let car = await Car.findOne({where: {id: id}})
    res.send(car)
}

// update car
const updateCar = async (req,res) => {
    let id = req.params.id
    const car = await Car.update(req.body, {where: { id: id}})

    res.status(200).send(car)
}

// delete Car
const deleteCar = async (req,res) => {
    let id = req.params.id
    await Car.destroy({where: { id: id}})

    res.status(200).send('Car is deleted')
}

// get carAvailability related to cars *depends on the db relation*.
const getCarAvailability = async (req,res) => {
    const id = req.params.id

    const data = await Car.findOne({
        include: [{
            model: carAvailability,
            as: 'carAvailability'
        }],
        where: {id: id}
    })
}

module.exports = {
    addCar,
    getAllCars,
    getOneCar,
    updateCar,
    deleteCar,
    getCarAvailability
}