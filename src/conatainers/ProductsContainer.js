import React, { Component } from 'react';
import { connect } from 'react-redux'
import Products from './../component/Products';
import * as actions from './../actions/index';
import * as messages from './../constant/messsageTypes';

class ProductsContainer extends Component {

    render() {
        const { products, onAddToCart } = this.props;
        return (
            <Products products={products} onAddToCart={(prod) => this.props.onAddToCart(prod)} />
        );
    }


}


const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispactchToProps = (dispatch, props) => {
    return {
        onAddToCart: (prod) => {
            dispatch(actions.addToCart(prod, 1));
            dispatch(actions.changeMessage(messages.MSG_ADD_TO_CART_SUCCESS))
        }
    }
}

export default connect(mapStateToProps, mapDispactchToProps)(ProductsContainer)