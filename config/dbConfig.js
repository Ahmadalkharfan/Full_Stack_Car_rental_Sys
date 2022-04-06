module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "password",
    DB: "sampleTest2",
    dialect: "mysql",

    //extra steps for more controll over the connections.
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000
    }
  };