import React, {useState} from 'react';
import {Container} from "@mui/material";
import {Link} from "react-router-dom"
import logo from "../../assets/images/Logo.png"
import Search from "../Search";
import user from "../../assets/images/Edward Powlowski.svg"
import "./Header.css"
import ItemsInCart from "../ItemsInCart";
import {ShoppingBasket} from "@mui/icons-material";
import SignModal from "../SignModal";


const Header = () => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <Container  maxWidth="xl" className="header_content"
                       style={{paddingLeft: "0", margin: "0", marginBottom: "40px", display: "flex"}}>
                <Link to="/"><img src={logo} alt="logo"/></Link>
                <Search/>
                <div className="header_options">
                    <Link to="/register">
                        <button className="cart-btn-register">Register</button>
                    </Link>
                    <button onClick={() => setOpenModal(true)} className="cart-btn"
                            style={{marginLeft: "20px", cursor: "pointer"}}>Sign In
                    </button>
                    <div className="cart-item">
                        <ItemsInCart/>
                        <Link className="cart-btn" to="/cart"><ShoppingBasket sx={{
                            mr: 2,
                            color: "blueYellow"
                        }}/> My Cart</Link>
                    </div>
                    <Link to="#"><img src={user} alt="user"/></Link>
                </div>
            </Container>
            {
                openModal ?
                    <SignModal setOpenModal={setOpenModal} openModal={openModal}/> : null
            }
        </>
    );
};

export default Header;