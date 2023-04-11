import React from 'react';
import Home from "./Home";
import { Route, Routes} from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Search from "../components/search";
import Recipe from "./Recipe";
import MyList from "./MyList";


function Pages() {
    return (

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cuisine/:type" element={<Cuisine/>} />
            <Route path="/searched/:search" element={<Searched/>} />
            <Route path="/recipe/:name" element={<Recipe/>} />
            <Route path="/MyList/" element={<MyList/>} />


        </Routes>

    );
}

export default Pages;