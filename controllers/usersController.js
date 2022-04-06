const db = require('../models')


// create main Model.
const User = db.users
const Car = db.cars
const carAvailability = db.car_availability

// main work

//USER CRUD
// create user
const addUser =  async (req,res) => {

    let info = {
        id: req.body.id,
        username: req.body.username,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        birthday: req.body.birthday,
        gender: req.body.gender,
        role:req.body.role,
        pass: req.body.pass,
        mobileNumber:req.body.mobileNumber,
        
    }

    //using sequalizer to create the user.
    const user = await User.create(info)
    //check if the user is created
    res.status(200).send(user)
    console.log(user)
}

// get all users
const getAllUsers = async (req,res) => {
    let users = await User.findAll({})
    res.send(users)
}

// get a single user
const getOneUser = async (req,res) => {
    let id = req.params.id
    let user = await User.findOne({where: {id: id}})
    res.send(user)
}

// update user
const updateUser = async (req,res) => {
    let id = req.params.id
    const user = await User.update(req.body, {where: { id: id}})

    res.status(200).send(user)
}

// delete user
const deleteUser = async (req,res) => {
    let id = req.params.id
    await User.destroy({where: { id: id}})

    res.status(200).send('User is deleted')
}

// get cars related to user *depends on the db relation*.
const getUserCars = async (req,res) => {
    const id = req.params.id

    const data = await User.findOne({
        include: [{
            model: Car,
            as: 'car'
        }],
        where: {id: id}
    })
}

module.exports = {
    addUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
    getUserCars
}