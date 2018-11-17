import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Slide, ToastContainer } from "react-toastify";
import Todos from "./Todos";
import Goals from "./Goals";
import Nav from "./Nav";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="main">
        <Nav />
        <div className="container my-3">
          <Todos />
          <Goals />
        </div>
        <ToastContainer
          transition={Slide}
          newestOnTop={true}
          hideProgressBar={true}
        />
      </div>
    );
  }
}

export default connect(state => ({
  loading: state.loading
}))(App);
