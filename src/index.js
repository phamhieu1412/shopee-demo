import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import myReducer from './reducers/indexReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {ProductProvider} from './context';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const myStore = createStore(
    myReducer,
    composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
    <ProductProvider >
        <Provider store={myStore}>
            <App />
        </Provider>
    </ProductProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
