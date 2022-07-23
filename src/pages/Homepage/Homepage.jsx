import React from 'react';
import Header from "../../components/Header";
import Catalog from "../../components/Catalog";
import {Route, Routes} from "react-router-dom";
import Cart from "../Cart";
import Register from "../Register/Register";
const Homepage = () => {
    return (
        <div>
            <Header />
            <Routes >
                <Route path="/" element={ <Catalog />} />
                <Route path="/cart" element={ <Cart />} />
                <Route path="/register" element={ <Register />} />
            </Routes>
        </div>
    );
};

export default Homepage;