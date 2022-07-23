import {applyMiddleware, createStore,} from "redux"
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk"
import {ADD_TO_CART, GET_PRODUCTS, REMOVE_FROM_CART} from "./actionTypes";
const initialState = {
    products: JSON.parse(localStorage.getItem("products"))|| [],
    cart : JSON.parse(localStorage.getItem("products")) || []
}
const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state, products: action.payload }
        case ADD_TO_CART:
            return {...state, cart: action.payload }
        case REMOVE_FROM_CART:
            return {...state, cart: action.payload }
        default :
            return state
    }

}


export const store = createStore(storeReducer, composeWithDevTools(applyMiddleware(thunk)))