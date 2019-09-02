import * as types from './../constant/TypeList';

export const products_get = () => {
    return {
        type: types.PRODUCTS_GET
    }
}

export const addToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        payload: {
            product,
            quantity
        }
    }
}

export const changeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        payload: message
    }
}

export const deleteProductInCart = (index) => {
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        payload: index
    }
}

export const updateProductInCart = (prod, quantity) => {
    return {
        type: types.UPDATE_PRODUCT_IN_CART,
        payload: {
            prod,
            quantity
        }
    }
} 
