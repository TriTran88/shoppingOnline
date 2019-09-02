import React, { Component } from 'react';
import ProductItem from './ProductItem';

class Products extends Component {

    render() {
        const { products } = this.props;
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {this.showProduct(products)}
                </div>
            </section>
        );
    }

    showProduct(products) {
        const result = products.map((prod, index) => {
            return <ProductItem
                product={prod}
                key={prod.id}
                onAddToCart={(product) => this.props.onAddToCart(product)}
            />
        })

        return result;
    }
}




export default Products