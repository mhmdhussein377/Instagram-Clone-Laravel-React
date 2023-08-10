import React from 'react'
import { Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Login  from "./pages/Login"
import Home from "./pages/Home"
import './App.css'

function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
}

export default App
