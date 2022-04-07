const express = require("express");
const cors = require("cors");
const app = express();
//var corsOptions = {
//  origin: "http://localhost:8081"
//};

//middleware
//app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routers

//user router
const userRouter = require('./routes/userRouter.js')
app.use('/api/users', userRouter)

//car router
const carRouter = require('./routes/carRouter.js')
app.use('/api/cars', carRouter)

//carAvailability router
const caRouter = require('./routes/carAvailabilityRouter.js')
app.use('/api/carAvailability', caRouter)


// API testing
app.get("/", (req, res) => {
    res.json({ message: "Welcome to SOCAR api" });
  });

//Port
const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}.`);
})