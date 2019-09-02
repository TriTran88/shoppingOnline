import React, { Component } from 'react';
import { connect } from 'react-redux'
import Cart from './../component/Cart';
import * as actions from './../actions/index'
import * as messages from './../constant/messsageTypes';

class CartContainer extends Component {

    render() {
        const { cart, onDeleProd } = this.props;
        return (
            <Cart onDeleteProd={(index) => onDeleProd(index)} onChangeQuantity={(prod, quanity) => this.props.onChangeQuantity(prod, quanity)}>
                {cart}
            </Cart>
        );
    }


}


const mapStateToProps = (state) => {
    return {
        cart: state.Cart
    }
}

const mapDispactchToProps = (dispatch, props) => {
    return {
        onDeleProd: (index) => {
            dispatch(actions.deleteProductInCart(index));
            dispatch(actions.changeMessage(messages.MSG_DELETE_PRODUCT_IN_CART_SUCCESS))
        },

        onChangeQuantity: (prod, quantity) => {
            dispatch(actions.updateProductInCart(prod, quantity));
            dispatch(actions.changeMessage(messages.MSG_UPDATE_CART_SUCCESS))
        }
    }
}

export default connect(mapStateToProps, mapDispactchToProps)(CartContainer)