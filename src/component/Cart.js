import React, { Component } from 'react';
import CartResult from './CartResult';
import CartItem from './CartItem';

class Cart extends Component {

    render() {
        const { children } = this.props;
        return (
            <section className="section">
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>Tổng Cộng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showCartItem(children)}
                            {this.showTotal(children)}
                        </tbody>

                    </table>
                </div>
            </section>
        );
    }
    showCartItem(cart) {
        let result = cart.map((item, index) => {
            return <CartItem
                item={item}
                key={index}
                onDeleteProd={() => this.props.onDeleteProd(index)}
                onChangeQuantity={(prod, quatinty) => this.props.onChangeQuantity(prod, quatinty)} />
        })

        return result
    }

    showTotal(cart) {
        return <CartResult cart={cart} />
    }
}

export default Cart