import React from 'react';
import Home from './page/normalPage/Home';
import NotFound from './page/normalPage/NotFound';
import Seller from './page/normalPage/Seller';
import Support from './page/normalPage/Support';
import LoginPage from './page/actionPage/LoginPage';
import SignUpPage from './page/actionPage/SignUpPage';
import ProductCart from './page/actionPage/ProductCart';
import AddProduct from './page/productListPage/AddProduct';
import DetailProduct from './page/actionPage/detailProduct/Index';



var routes = [
    {
        path:'/',
        exact: true,
        main: () => <Home/>
    },{
        path:'/seller',
        exact: false,
        main: () => <Seller/>
    },{
        path:'/support',
        exact: false,
        main: () => <Support/>
    },{
        path:'/dangnhap',
        exact: false,
        main: ({history}) => <LoginPage history={history}/>
    },{
        path:'/dangki',
        exact: false,
        main: () => <SignUpPage/>
    },{
        path:'/danhsachsanpham',
        exact: false,
        main: ({match}) => <ProductCart match={match} />
    },{
        path:'/chitietsanpham/:id',
        exact: false,
        main: ({match, history}) => <DetailProduct match={match} history={history}/>
    },{
        path:'/xemthem',
        exact: false,
        main: () => <AddProduct/>
    },{
        path:'',
        exact: false,
        main: () => <NotFound/>
    }
];

export default routes;