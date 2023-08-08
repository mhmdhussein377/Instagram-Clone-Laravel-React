import React from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'

function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path='/register' element={<div>Register</div>} />
        <Route path='/' element={<div>Login</div>} />
      </Routes>
    </React.Fragment>
  )
}

export default App
