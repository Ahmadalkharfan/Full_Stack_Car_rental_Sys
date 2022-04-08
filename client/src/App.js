import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppNavbar from "./components/Navbar";

//User imports
import AddUser from "./screens/AddUser";
import EditUser from "./screens/EditUser";
import ShowUsers from "./screens/ShowUsers";
import UserDetail from "./screens/UserDetail";

//Car imports
import AddCar from "./screens/AddCar";
import EditCar from "./screens/EditCar";
import ShowCars from "./screens/ShowCars";
import CarDetail from "./screens/CarDetail";

//Car Availability imports
import AddCarAvailability from "./screens/AddCarAvailability";
import EditCarAvailability from "./screens/EditCarAvailability";
import ShowCarsAvailability from "./screens/ShowCarAvailability";
import CarAvailabilityDetail from "./screens/CarAvailabilityDetail";
import AppFooter from "./components/Footer";


const App = () => {
  return (

    <BrowserRouter>

      <AppNavbar />

      <Routes>
        {/* User Routes */}
        <Route exact path='/addUser' element={<AddUser />} />
        <Route exact path='/users' element={<ShowUsers />} />
        <Route exact path='/user/edit/:id' element={<EditUser />} />
        <Route exact path='/user/:id' element={<UserDetail />} />

        {/* Car Routes */}
        <Route exact path='/addCar' element={<AddCar />} />
        <Route exact path='/cars' element={<ShowCars />} />
        <Route exact path='/car/edit/:id' element={<EditCar />} />
        <Route exact path='/car/:id' element={<CarDetail />} />

        {/* CarAvailability Routes */}
        <Route exact path='/addCarAvailability' element={<AddCarAvailability />} />
        <Route exact path='/carsAvailability' element={<ShowCarsAvailability />} />
        <Route exact path='/carAvailability/edit/:id' element={<EditCarAvailability />} />
        <Route exact path='/carAvailability/:id' element={<CarAvailabilityDetail />} />
      </Routes>
      <AppFooter/>
    </BrowserRouter>
  )
}

export default App