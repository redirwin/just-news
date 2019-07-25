import React from "react";
import "./styles/App.scss";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>Hello</p>;
  }
}

const mapStateToProps = state => {
  return {
    data: state.name
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
