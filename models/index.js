const dbConfig = require('../config/dbConfig.js');
const {Sequelize, DataTypes} = require('sequelize');


const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('Connected')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./usersModel.js')(sequelize, DataTypes)
db.cars = require('./carsModel.js')(sequelize, DataTypes)
db.car_availability = require('./carAvailabilityModel.js')(sequelize, DataTypes)


//true = create everything in the db from the start every run.
db.sequelize.sync({force: false})
.then(() => { 
    console.log('re-synced.')
})


// cars foreign key 1 to many
db.users.hasMany(db.cars,{
    foreignKey: 'user_id',
    as: 'cars'
})

db.cars.belongsTo(db.users,{
    foreignKey: 'user_id',
    as: 'user'
})

// carsAvailability foreign key 1 to 1
db.cars.hasOne(db.car_availability,{
    foreignKey: 'car_id',
    as: 'carAvailability'
})

db.car_availability.belongsTo(db.cars,{
    foreignKey: 'car_id',
    as: 'car'
})

module.exports = db

