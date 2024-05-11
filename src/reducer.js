function reducer(state, { type, payload }) {
    switch (type) {
        case "CLOSE_ALERT":
            return {
                ...state,
                alertName: '',
            }
        case "CLOSE_CART":
            return {
                ...state,
                showCart: false,
            }
        case "TOGGLE_CART":
            return {
                ...state,
                showCart: !state.showCart,
            }
        case "REMOVE_ORDER":
            return {
                ...state,
                order: state.order.filter((elem) => elem.mainId !== payload.elem.mainId)
            }
        case "INCREASE_QUANTITY": {
            const itemIndex = state.order.findIndex((el) => el.mainId === payload.mainId);
            const newOrder = state.order.map((elem, index) => {
                if (index === itemIndex) {
                    return {
                        ...elem,
                        quantity: elem.quantity + 1,
                        totalAmount: elem.price.finalPrice * (elem.quantity + 1),
                    };
                } else {
                    return elem;
                }
            });
            return {
                ...state,
                order: newOrder,
            }
        }
        case "DECREASE_QUANTITY": {
            const itemIndex = state.order.findIndex((el) => el.mainId === payload.mainId);
            const newOrder = state.order.map((elem, index) => {
                if (index === itemIndex && elem.quantity > 1) {
                    return {
                        ...elem,
                        quantity: elem.quantity - 1,
                        totalAmount: elem.price.finalPrice * (elem.quantity - 1),
                    };
                } else {
                    return elem;
                }
            });
            return {
                ...state,
                order: newOrder,
            }
        }
        case "ADD_ORDER": {
            const itemIndex = state.order.findIndex((el) => el.mainId === payload.elem.mainId);
            let newOrder;
            if (itemIndex < 0) {
                newOrder = [
                    ...state.order,
                    { ...payload.elem, quantity: 1, totalAmount: payload.elem.price.finalPrice },
                ]
            } else {
                newOrder = state.order.map((elem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...elem,
                            quantity: elem.quantity + 1,
                            totalAmount: elem.price.finalPrice * (elem.quantity + 1),
                        };
                    } else {
                        return elem;
                    }
                })
            }
            return {
                ...state,
                alertName: payload.elem.title,
                order: newOrder,
            }
        }
        case "SET_ITEMS": {
            return {
                ...state,
                shop: payload,
                isLoading: false
            }
        }
        default:
            return state
    }

}

export { reducer }