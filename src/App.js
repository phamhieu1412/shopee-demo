import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './Routes';

import ChatForm from './components/ChatForm';
import './myCSS/ChatForm.scss';
import { connect } from 'react-redux';
import { actOpenFormChat } from './actions/indexAction';

class App extends Component {
  showRoute = (routes) => {
    var result;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route key={index} exact={route.exact} path={route.path} component={route.main} />
      });
    }
    return result;
  }
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
        <Router>
          {/* <Home /> */}

          {result}

          <Switch>
            {this.showRoute(routes)}
          </Switch>
        </Router>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
