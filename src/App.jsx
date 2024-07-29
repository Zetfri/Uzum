import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/home.jsx"
import Nav from "./components/nav.jsx";
function App(props) {
    return (
        <div>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </div>
    );
}

export default App;