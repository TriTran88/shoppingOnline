import * as types from './../constant/TypeList'

const data = localStorage.getItem('Cart') ? JSON.parse(localStorage.getItem('Cart')) : []
const instialState = data;

const Cart = (state = instialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            const { product, quantity } = action.payload
            const index = state.findIndex(i => i.product.id === product.id)
            if (index === -1) {
                state.push(action.payload)
            } else {
                state[index] = {
                    ...state[index],
                    product,
                    quantity: state[index].quantity + quantity
                }
            }
            localStorage.setItem('Cart', JSON.stringify(state))
            return [...state];
        case types.DELETE_PRODUCT_IN_CART: {
            state.splice(action.playload, 1);
            localStorage.setItem('Cart', JSON.stringify(state))
            return [...state];
        }
        case types.UPDATE_PRODUCT_IN_CART: {
            const { prod, quantity } = action.payload;
            const index = state.findIndex(e => e.product.id === prod.id);
            if (quantity > 0) {
                state[index].quantity = quantity;
            } else {
                state[index].quantity = 0
            }
            localStorage.setItem('Cart', JSON.stringify(state));
            return [...state]
        }
        default: return state
    }
    // return state
}
export default Cart;