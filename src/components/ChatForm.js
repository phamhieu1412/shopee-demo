import React, { Component } from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import {connect} from 'react-redux';
import {actCloseFormChat} from '../actions/indexAction';


const { Option } = Select;

class ChatForm extends Component {

    onClose = () => {
        this.props.onCloseFormChat();
    }

    render() {
        return (
            <div className="ChatForm">
                <div className="header">
                    <h6>Chat</h6>
                    <div>
                        <button>
                            <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </button>
                        <button onClick={() => this.onClose()}>
                            <i className="fa fa-caret-down" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                <div className="content">
                    <div className="contentChat">
                        <div>
                            <img src="https://i.imgur.com/ilfo6nw.png" alt="chat1" />
                        </div>
                        <p>Xin chào !</p>
                    </div>
                    <div className="listChat mt-5">
                        <div style={{ display: 'flex' }}>
                            <input name="inputChat" placeholder="Tìm theo tên khách hàng" />

                            <Select defaultValue="ChuaDoc" style={{ width: 90 }}>
                                <Option value="TatCa">
                                    Tất cả
                                </Option>
                                <Option value="ChuaDoc">
                                    Chưa đọc
                                </Option>
                                <Option value="DaGhim">
                                    Đã ghim
                                </Option>
                            </Select>
                        </div>
                        <div className="img">
                            <img src="https://i.imgur.com/mNe4bnF.png" alt="chat2" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onCloseFormChat: () => {
            dispatch(actCloseFormChat())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatForm);