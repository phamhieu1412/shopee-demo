import React, { Component, Fragment } from 'react';
import '../../myCSS/Cart-Product-Item.css';
import CartsContainer from '../../containers/ProductCartContainer/CartsContainer';
import MessagesContainer from '../../containers/ProductCartContainer/MessagesContainer';

export default class ProductCart extends Component {

    render() {
        return (
            <Fragment>
                <main id="">
                    <div className="container">
                        {/* <!-- Message --> */}
                        <MessagesContainer />
                        {/* <!-- Cart --> */}
                        <section className="section">
                            <h2 className="section-heading">Giỏ hàng</h2>
                            {/* product-table */}
                            <CartsContainer />
                        </section>
                    </div>
                </main>
            </Fragment>
        );
    }
}

