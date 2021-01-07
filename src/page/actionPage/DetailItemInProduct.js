import React, { Component, Fragment } from 'react';


class DetailItemInProduct extends Component {

    render() {
        var {product} = this.props;
        return (
            <Fragment>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <h5>{product.price}</h5>
                </div>
            </Fragment>
        );
    }
}



export default DetailItemInProduct;