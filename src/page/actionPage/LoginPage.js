import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../../myCSS/PageLogin.css';
import axios from 'axios';
// import {getJWT} from '../../helpers/getJWT';


class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password:'',
            data: null
        }
    }
    
    onChangeLogin = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    // componentWillMount() {
    //     const jwt = getJWT();
    //     axios.get('/login')
    //     .then( response => {
    //         if (jwt === response.data) {
    //             this.props.history.push('/danhsachsanpham');
    //         }    
    //         else {
    //             this.props.history.push('/dangnhap');
    //         }
    //         console.log(response.data)
    //     })
    //     .catch( error => console.log(error));
    // }
    onSubmitLogin = (event) => {
        event.preventDefault();
        axios.post('/login',{
            username: this.state.username,
            password: this.state.password
        })
        .then( response => {  
            localStorage.setItem('JWT', response.data.token);
            this.props.history.push('/dangki');
        })
        .catch( error => console.log(error));
    }
    render() {
        return (
            <div className="login">
                <form onSubmit={ (event)=> this.onSubmitLogin(event) }>
                    <h1>Login</h1>
                    <div className="textbox">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        {/* input thieu value */}
                        <input type="text" 
                                placeholder="Tên người dùng" 
                                name="username" 
                                onChange={ (event)=> this.onChangeLogin(event) }
                                value={this.state.username}
                        />
                    </div>

                    <div className="textbox">
                        <i className="fa fa-lock" aria-hidden="true"></i>
                        <input type="password" 
                                placeholder="Mật khẩu" 
                                name="password" 
                                onChange={ (event)=> this.onChangeLogin(event) }
                                value={this.state.password}
                        />
                    </div>

                    <div className="signup-now">Chưa có tài khoản? <NavLink to="/dangki" style={{ color: 'red' }}>Đăng kí ngay</NavLink></div>
                    
                    <button type="submit" className="btn">Đăng nhập</button>
                    
                </form>
            </div>
        );
    }
}


export default LoginPage;