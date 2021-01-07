import React, { Component, Fragment } from 'react';
import '../../../myCSS/Detail-Product.css';
import { connect } from 'react-redux';
import { editProductRequest } from '../../../actions/indexAction';
import RelateProduct from './RelateProduct';
import InfoSeller from './InfoSeller';
import ReviewsOfUser from './ReviewsOfUser';
import Main from './MainDetail';


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Prod: {
                id: '',
                nameProd: '',
                priceProd: '',
                descriptionProd: '',
                imageProd: '',
                selled: '',
                nameShop: '',
                imageShop: '',
                discount: '',
                imageProd1: '',
                imageProd2: '',
                imageProd3: ''
            }
        }
    }
    //xem(khi clik vao xem them)
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProductRequest(id);
        }
    }
    //sau khi click xem them 
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditting) {
            this.setState({
                Prod: {
                    id: nextProps.itemEditting.id,
                    nameProd: nextProps.itemEditting.name,
                    priceProd: nextProps.itemEditting.price,
                    descriptionProd: nextProps.itemEditting.description,
                    imageProd: nextProps.itemEditting.image,
                    selled: nextProps.itemEditting.selled,
                    nameShop: nextProps.itemEditting.nameShop,
                    imageShop: nextProps.itemEditting.imageShop,
                    discount: nextProps.itemEditting.discount,
                    imageProd1: nextProps.itemEditting.imageP1,
                    imageProd2: nextProps.itemEditting.imageP2,
                    imageProd3: nextProps.itemEditting.imageP3
                }
            })
        }
    }

    render() {
        // console.log(this.props.history)
        return (
            <Fragment>
                {/* <h1>Main product</h1> */}
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12"> HOME &GT SHOP &GT WOMEN &GT WOMEN'S DRESS </div>
                    </div>
                </div>
                <Main dataOfProd={this.state.Prod} />

                {/* thong tin nguoi ban */}
                <InfoSeller dataOfProd={this.state.Prod}/>

                {/* review user */}
                <ReviewsOfUser />


                {/* Cac san pham khac */}
                <RelateProduct />

            </Fragment>
        );
    }
}


var mapStateToProps = (state) => {
    return {
        itemEditting: state.itemEdit
    }
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        onEditProductRequest: (id) => {
            dispatch(editProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);