import React from "react";
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import AddUser from "./screens/AddUser";
import EditUser from "./screens/EditUser";
import ShowUsers from "./screens/ShowUsers";
import UserDetail from "./screens/UserDetail";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/addUser' element={<AddUser/>} />
          <Route exact path='/users' element={<ShowUsers />} />
          <Route exact path='/user/edit/:id' element={<EditUser/>} />
          <Route exact path='/user/:id' element={<UserDetail/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App