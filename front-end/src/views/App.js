import React from 'react';
import Login from "../components/login.js"
import {Route,Routes,Navigate} from "react-router-dom"
import Home from "../components/home.js"
function App(){
    return(
        <Routes>
			<Route path="/login" exact element={<Login />} />
			<Route path="/home" exact element={<Home />} />

			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
    );
}

export default App