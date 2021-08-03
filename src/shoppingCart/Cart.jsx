import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  renderCart = () => {
    return this.props.cartProduct.map((product) => {
      const { id, img, name, price, quantity } = product;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>
            <img src={img} alt={name} width={100} height={100} />
          </td>
          <td>{name}</td>
          <td>
            <button
              onClick={() => this.handleProductAmount(id, false)}
              className="btn btn-danger"
            >
              -
            </button>
            <span className="mx-3">{quantity}</span>
            <button
              onClick={() => this.handleProductAmount(id, true)}
              className="btn btn-success"
            >
              +
            </button>
          </td>
          <td>{price}</td>
          <td>{quantity * price}</td>
          <td>
            <button
              onClick={() => this.handleDeleteProduct(id)}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  handleProductAmount = (id, amount) => {
    this.props.dispatch({
      type: "PRODUCT_AMOUNT",
      payload: {
        id,
        amount,
      },
    });
  };

  handleDeleteProduct = (id) => {
    this.props.dispatch({
      type: "DELETE_PRODUCT",
      payload: id,
    });
  };

  saveProduct = () => {
    this.props.dispatch({
      type: "SAVE_PRODUCT",
    });
  };
  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table" width={700} height={350}>
                <thead>
                  <tr>
                    <th>Mã sp</th>
                    <th>Hình ảnh</th>
                    <th>Tên</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{this.renderCart()}</tbody>
                <tfoot>
                  <tr>
                    <td colspan="5"></td>
                    <td style={{ fontSize: "25px", fontWeight: "bold" }}>
                      Tổng tiền :{" "}
                      {this.props.cartProduct.reduce((total, product) => {
                        return (total += product.price * product.quantity);
                      }, 0)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                data-target="#modelId"
              >
                Close
              </button>
              <button
                onClick={this.saveProduct}
                type="button"
                className="btn btn-primary"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartProduct: state.shoppingCart.cartProduct,
  };
};
export default connect(mapStateToProps)(Cart);
