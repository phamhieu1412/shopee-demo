import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import '../../myCSS/SignUp.css';
import { withRouter } from 'react-router-dom';

class SignUpPage extends Component {
    onShow = () => {
        console.log(this.props)
    }
    render() {
        return (
            <Fragment>
                <div className="sign-up">
                    <div className="sign-up-left">
                        <form>
                            <h1>Sign Up</h1>

                            <input type="text" name="username" placeholder="Username" />
                            <input type="text" name="email" placeholder="Email" />
                            <input type="password" name="password" placeholder="Password" />
                            <input type="password" name="password-retype" placeholder="Retype password" />

                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="checkboxSignup" />
                                <label className="form-check-label" htmlFor="checkboxSignup">Tôi đã đọc và đồng ý điều khoản</label>
                            </div>

                            <input type="submit" name="btn-signup" value="Sign Up" />
                        </form>
                    </div>
                    <div className="sign-up-right">
                        <div className="button-with">
                            <NavLink to="/dangnhap">
                                <button className="social log-btn">
                                    Log In
                                </button>
                            </NavLink>
                            <a href="https://www.facebook.com">
                                <button className="social facebook" >
                                    Log in with Facebook
                                </button>
                            </a>
                            <a href="https://twitter.com">
                                <button className="social twitter">
                                    Log in with Twiter
                                </button>
                            </a>
                            <a href="https://www.google.com/intl/vi/gmail/about/">
                                <button className="social google">
                                    Log in with Google
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="or">OR</div>
                </div>
            </Fragment>
        );
    }
}


export default withRouter(SignUpPage);