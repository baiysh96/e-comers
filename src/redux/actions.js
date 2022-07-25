import axios from "axios"
import {ADD_TO_CART, GET_PRODUCTS, REMOVE_FROM_CART} from "./actionTypes";

export const getProducts = () => {
    return (dispatch) => {
        axios("https://62d825639c8b5185c783fe2a.mockapi.io/products")
            .then((res) => {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: res.data
                })
            })
    }
}
export const addCart = (index) => {
    return (dispatch, getState) => {
        const filtered = getState().products.map((item, idx) => {
            if (index === idx) {
                return getState().cart.push(item)
            }
            return item
        })
        return dispatch({
            type: ADD_TO_CART,
            payload: getState().cart,filtered
        })
    }

}
export const removeInCart = (id) => {
    return (dispatch,getState) => {
        const filteredItem = getState().cart.filter(item => item.id !== id)
        return dispatch({
            type: REMOVE_FROM_CART,
            payload: filteredItem
        })
    }
}

