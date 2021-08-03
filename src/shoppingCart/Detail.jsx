import React, { Component } from "react";
import { connect } from "react-redux";

class Detail extends Component {
  render() {
    const { name, img, screen, backCamera, frontCamera, desc } =
      this.props.showDetail;
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-5">
            <h3>{name}</h3>
            <img src={img} alt={name} className="w-100" />
          </div>
          <div className="col-7">
            <h4>Thông số kỹ thuật</h4>
            <table className="table text-left">
              <tbody>
                <tr>
                  <td>Màn hình :</td>
                  <td>{screen}</td>
                </tr>
                <tr>
                  <td>Camera trước:</td>
                  <td>{backCamera}</td>
                </tr>
                <tr>
                  <td>Camera Sau::</td>
                  <td>{frontCamera}</td>
                </tr>
                <tr>
                  <td>Mô tả :</td>
                  <td>{desc}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    showDetail: state.shoppingCart.showDetail,
  };
};
export default connect(mapStateToProps)(Detail);
