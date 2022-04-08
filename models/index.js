const dbConfig = require('../config/dbConfig.js');
const {Sequelize, DataTypes} = require('sequelize');
var mysql = require('mysql2');

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

// Creating a mysql connection
var con = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
 });



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
    as: 'car'
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

//inserting values for testing
con.connect(function(err) {
    if (err) throw err;
    console.log("DB Connected!");
    var sql = "INSERT INTO Users (id, username, firstName, lastName, birthday, gender, role, pass, mobileNumber, createdAt, updatedAt)  VALUES (NULL, 'Ahmad', 'Ahmad', 'Alkharfan', '2022-04-20', 'M', 'Admin', 'password!', '019', '2022-04-08 23:15:54.000000', '2022-04-08 23:15:54.000000'),(NULL, 'Andrew', 'Andrew', 'Alkharfan', '2022-04-20', 'M', 'Admin', 'password!', '019', '2022-04-08 23:15:54.000000', '2022-04-08 23:15:54.000000'),(NULL, 'Danny', 'Danny', 'Alkharfan', '2022-04-20', 'M', 'User', 'password!', '019', '2022-04-08 23:15:54.000000', '2022-04-08 23:15:54.000000');";
    con.query(sql, function (err, result) {
       if (err) throw err;
       console.log("Successfully inserted multiple records into the table.");
    });

    var sql = "INSERT INTO Cars (id, brand, door_num, year, color, model_name, mode, plate_number, user_id, location_latitudes, location_longitude, day_price, is_featured, createdAt, updatedAt)   VALUES (NULL, 'KIA', '4', '2022', 'Red', 'Rio', 'AUTO', 'KYK123', '1', '22.22', '-33.22', '20', '0', '2022-04-09 00:07:29.000000', '2022-04-09 00:07:29.000000'),(NULL, 'Audi', '2', '2022', 'Red', 'A3', 'AUTO', 'KYK122', '2', '22.22', '-33.22', '20', '0', '2022-04-09 00:07:29.000000', '2022-04-09 00:07:29.000000'),(NULL, 'KIA', '5', '2020', 'Blue', 'Rio', 'MANUAL', 'KYK123', '3', '22.22', '-33.22', '20', '0', '2022-04-09 00:07:29.000000', '2022-04-09 00:07:29.000000');";
    con.query(sql, function (err, result) {
       if (err) throw err;
       console.log("Successfully inserted multiple records into the table.");
    });

    var sql = "INSERT INTO carAvailabilities (id, car_id, start_at, end_at, createdAt, updatedAt)  VALUES (NULL, '1', '2022-04-09 00:12:53.000000', '2022-04-09 00:12:53.000000', '2022-04-09 00:12:53.000000', '2022-04-09 00:12:53.000000'),(NULL, '2', '2022-04-09 00:12:53.000000', '2022-04-09 00:12:53.000000', '2022-04-09 00:12:53.000000', '2022-04-09 00:12:53.000000'),(NULL, '3', '2022-04-09 00:12:53.000000', '2022-04-09 00:12:53.000000', '2022-04-09 00:12:53.000000', '2022-04-09 00:12:53.000000');";
    con.query(sql, function (err, result) {
       if (err) throw err;
       console.log("Successfully inserted multiple records into the table.");
    });
 });


module.exports = db

