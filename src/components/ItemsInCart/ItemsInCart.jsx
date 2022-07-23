import React from 'react';
import "./ItemsInCart.css"
import {useSelector} from "react-redux";
const ItemsInCart = () => {
    const { cart } = useSelector(s => s)
    const quantity = cart.length
    return quantity > 0  ?(
        <div className="items-in-cart">
            {quantity}
        </div>
    ): null
};

export default ItemsInCart;