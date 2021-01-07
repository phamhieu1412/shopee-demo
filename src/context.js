import React, { Component } from 'react';


const productContext = React.createContext();   


class ProductProvider extends Component {
    state = {
        productInCart: []
    }
    
    render() {
        
        return (
            <productContext.Provider value="{{...this.state}}">
                {this.props.children}
            </productContext.Provider>
        )
    }
}

const ProductConsumer = productContext.Consumer;



export {ProductProvider, ProductConsumer};
