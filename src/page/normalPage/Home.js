import React, { Component, Fragment } from 'react';
import Navbar from '../../components/Navbar';
import LogoSearchCart from '../../components/LogoSearchCart';
import Poster from '../../components/Poster';
import Benefit from '../../components/Benefit';
import Footer from '../../components/Footer';
import Policy from '../../components/Policy';
import ProductListPage from '../productListPage/ProductListPage';

import ChatForm from '../../components/ChatForm';
import '../../myCSS/ChatForm.scss';
import { connect } from 'react-redux';
import { actOpenFormChat } from '../../actions/indexAction';

class Home extends Component {

  onClickChat = () => {
    this.props.onOpenFormChat();
  }

  render() {
    var { displayForm } = this.props;
    var result = (displayForm === true) ? <ChatForm /> : <a href="//" className="OpenChatForm" onClick={() => this.onClickChat()}>
        <i className="fa fa-commenting-o" aria-hidden="true"></i>
        <h5>Chat</h5>
      </a>;


    return (
      <Fragment>
        {/* navbar */}
        <Navbar />

        {/* logo + search + cart     */}
        <LogoSearchCart />

        {/* poster */}
        <Poster />

        {/* product */}
        <ProductListPage />

        {/* benefit */}
        <Benefit />

        {/* footer */}
        <Footer />

        {/* chat */}
        {result}

        {/* policy */}
        <Policy />

      </Fragment>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    displayForm: state.displayFormChat
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onOpenFormChat: () => {
      dispatch(actOpenFormChat())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
