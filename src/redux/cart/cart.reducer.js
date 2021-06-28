import { ADD_ITEM, TOGGLE_CART_HIDDEN } from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItem: []
}

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };

        case ADD_ITEM:
            return {
                ...state,
                cartItem: addItemToCart(state.cartItem, payload)
            }
    
        default:
            return state;
    }
}

export default cartReducer;