import React, { Component } from 'react';


class CartItem extends Component {

  render() {
    const {product, quantity} = this.props.item;
 
    return (
        <tr>
            <th scope="row">
                <img src={product.image}
                    alt={product.name} className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{product.name}</strong>
                </h5>
            </td>
            <td>{product.price}$</td>
            <td className="center-on-small-only">
                <span className="qty">{quantity}</span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                        onClick={()=>{this.onChangeQuantity(product,quantity-1)}}
                        >
                        <a>—</a>
                    </label>
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                        onClick={()=>{this.onChangeQuantity(product,quantity+1)}}
                        >
                        <a>+</a>
                    </label>
                </div>
            </td>
            <td>{this.showSubTotal(product, quantity)}$</td>
            <td>
                <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                    title="" data-original-title="Remove item" onClick={()=>this.props.onDeleteProd()}>
                    X
                </button>
            </td>
        </tr>
    );
  }

  showSubTotal(product, quantity){
    let result = 0;
    result = product.price * quantity;
    return result
  }

  onChangeQuantity = (product,quantity)=>{
   this.props.onChangeQuantity(product,quantity)
  }
}

export default CartItem