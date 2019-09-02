import * as types from './../constant/TypeList'

const data = localStorage.getItem('Cart') ? JSON.parse(localStorage.getItem('Cart')) : [
    // {
    //     product: {
    //         id: 1,
    //         name: "IPHONE 6 Plus",
    //         image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
    //         desc: 'Product made by Apple',
    //         price: 400,
    //         rating: 4
    //     },
    //     quantity: 2
    // },
    // {
    //     product: {
    //         id: 3,
    //         name: "SAMSUNG GALAXY NOTE 10",
    //         image: 'data:image/jpeg;base64,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',
    //         desc: 'Product made by SamSung',
    //         price: 999,
    //         rating: 5,
    //         inventory: 50
    //     },
    //     quantity: 3
    // }
]
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