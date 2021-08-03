import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItem extends Component {
  showDetail = (prod) => {
    this.props.dispatch({
      type: "SHOW_DETAIL",
      payload: prod,
    });
  };

  addProductToCart = () => {
    this.props.dispatch({
      type: "ADD_PRODUCT_TO_CART",
      payload: this.props.prod,
    });
  };
  render() {
    const { img, name } = this.props.prod;
    return (
      <div className="card" style={{ width: "16rem" }}>
        <img src={img} alt={name} style={{ width: "100%", height: 250 }} />
        <div className="card-body">
          <h4>{name}</h4>
          <button
            onClick={() => this.showDetail(this.props.prod)}
            className="btn btn-info"
          >
            Chi tiết
          </button>
          <button
            className="btn btn-danger ml-1"
            onClick={this.addProductToCart}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(ProductItem);
