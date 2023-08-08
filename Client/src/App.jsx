import React from 'react'
import { Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Login  from "./pages/Login"
import './App.css'

function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
