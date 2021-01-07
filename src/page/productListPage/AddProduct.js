import React, { Component, Fragment } from 'react';
import LSC from '../../components/LogoSearchCart';
import Navbar from '../../components/Navbar';
import Benefit from '../../components/Benefit';
import Footer from '../../components/Footer';
import Policy from '../../components/Policy';
import ProductPagination from './productListPagination/ProductPagination';
import { connect } from 'react-redux';
import { listAllProductRequest } from '../../actions/indexAction';

class AddProduct extends Component {
    componentDidMount() {
        this.props.onListAllProductRequest();
    }
    render() {

        //search
        var { keyword, products } = this.props;

        
        products = products.filter((prod) => {
            return prod.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        });

        return (
            <Fragment>
                {/* navbar */}
                <Navbar />
                {/* LSC */}
                <LSC />

                {/* products */}

                {/* {this.props.children} */}

                <div className="container card-product">
                    <div className="row" style={{ width: '100%' }}>
                        <div >
                            <ProductPagination products={products}/>
                        </div>

                    </div>
                </div>
                {/* benefit */}
                <Benefit />

                {/* footer */}
                <Footer />

                {/* policy */}
                <Policy />

            </Fragment>
        );
    }
}


var mapStateToProps = (state) => {
    return {
        products: state.products,
        keyword: state.searchProduct
    }
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        onListAllProductRequest: () => {
            dispatch(listAllProductRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
