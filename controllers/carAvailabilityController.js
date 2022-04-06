const db = require('../models')


// create carAvailability Model.
const User = db.users
const Car = db.cars
const carAvailability = db.car_availability

// carAvailability work

//carAvailability CRUD
// create carAvailability
const addCarAvailability =  async (req,res) => {

    let info = {
        id: req.body.id,
        car_id: req.body.car_id,
        start_at: req.body.start_at,
        end_at: req.body.end_at
    }

    //using sequalizer to create the carAvailability.
    const ca = await carAvailability.create(info)
    //check if the carAvailability is created
    res.status(200).send(ca)
    console.log(ca)
}

// get all carAvailability
const getAllCarAvailability = async (req,res) => {
    let ca = await carAvailability.findAll({})
    res.send(ca)
}

// get a single carAvailability
const getOneCarAvailability = async (req,res) => {
    let id = req.params.id
    let ca = await carAvailability.findOne({where: {id: id}})
    res.send(ca)
}

// update carAvailability
const updateCarAvailability = async (req,res) => {
    let id = req.params.id
    const ca = await carAvailability.update(req.body, {where: { id: id}})

    res.status(200).send(ca)
}

// delete carAvailability
const deleteCarAvailability = async (req,res) => {
    let id = req.params.id
    await carAvailability.destroy({where: { id: id}})

    res.status(200).send('carAvailability is deleted')
}

module.exports = {
    addCarAvailability,
    getAllCarAvailability,
    getOneCarAvailability,
    updateCarAvailability,
    deleteCarAvailability
}