import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  renderProduct = () => {
    return this.props.productList.map((item) => {
      return (
        <div key={item.id} className="col-3 mt-4">
          <ProductItem prod={item} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderProduct()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productList: state.shoppingCart.productList,
  };
};
export default connect(mapStateToProps)(ProductList);
