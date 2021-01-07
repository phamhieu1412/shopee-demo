import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import ContentAddProduct from './ContentAddProduct';
import { connect } from 'react-redux';
import { listAllProductRequest, editProductRequest, updateProductRequest } from '../../actions/indexAction';
import '../../myCSS/Card.css';

class ProductListPage extends Component {

  //fetch data
  componentDidMount() {
    this.props.onListAllProductRequest();
  }
  showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product) => {
        return <ContentAddProduct key={product.id} product={product} />
      });
    }
    return result;
  }

  render() {
    var { products, keyword } = this.props;
    // console.log(products);
    //search
    products = products.filter((prod) => {
      return prod.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    });


    return (
      <Fragment>

        <div className="container card-product">
          <div className="row" style={{ width: '100%' }}>
            <ul className="list-product">
              {this.showProducts(products)}
            </ul>
          </div>
        </div>


        <div className="container" style={{ margin: '50px auto' }}>
          <div className="row" style={{ textAlign: 'center', marginTop: '40px' }}>
            <NavLink to="/xemthem"
              className="btn btn-danger"
              style={{ width: '30%', height: 'auto', fontSize: '100%' }}>Xem Thêm
            </NavLink>
          </div>
        </div>
      </Fragment>
    );
  }
}
var mapStateToProps = (state) => {
  return {
    products: state.products,// do can phai render ra san pham,
    itemEditting: state.itemEdit,
    keyword: state.searchProduct
  }
}
var mapDispatchToProps = (dispatch, props) => {
  return {
    onListAllProductRequest: () => {
      dispatch(listAllProductRequest())
    },
    onEditProductRequest: (id) => {
      dispatch(editProductRequest(id))
    },
    onUpdateProductRequest: (product) => {
      dispatch(updateProductRequest(product))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
