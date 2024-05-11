import { createContext, useReducer } from "react";

import { reducer } from "./reducer";

const ShopContext = createContext();

const initialState = {
    order: localStorage.fortniteStore ? JSON.parse(localStorage.fortniteStore) : [],
    showCart: false,
    alertName: '',
    shop: [],
    isLoading: true,
}

const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState)

    value.closeAlert = () => {
        dispatch({ type: "CLOSE_ALERT" })
    }

    value.closeCart = () => {
        dispatch({ type: 'CLOSE_CART' })
    }

    value.toggleCart = () => {
        dispatch({ type: "TOGGLE_CART" })
    }

    value.removeOrder = (item) => {
        dispatch({ type: "REMOVE_ORDER", payload: { elem: item } })
    }

    value.increaseQuantity = (item) => {
        dispatch({ type: "INCREASE_QUANTITY", payload: item })
    }

    value.decreaseQuantity = (item) => {
        dispatch({ type: "DECREASE_QUANTITY", payload: item })
    }

    value.addOrder = (item) => {
        dispatch({ type: "ADD_ORDER", payload: { elem: item } })
    }

    value.setItems = (data) => {
        dispatch({ type: "SET_ITEMS", payload: data })
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export { ShopContext, ContextProvider }