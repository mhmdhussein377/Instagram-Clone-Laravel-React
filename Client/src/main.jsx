import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter as Router} from "react-router-dom";
import './index.css'
import axios from "axios"

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>,)
