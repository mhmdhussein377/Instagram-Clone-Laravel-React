import React from 'react'
import { Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Login  from "./pages/Login"
import Home from "./pages/Home"
import './App.css'

function App() {

  const routes = [
    { path: "/", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/home", element: <Home /> }
  ];

  const generatedRoutes = routes.map((route, index) => (
    <Route key={index} path={route.path} element={route.element} />
  ));

  return (
    <React.Fragment>
      <Routes>
        {generatedRoutes}
      </Routes>
    </React.Fragment>
  );
}

export default App
