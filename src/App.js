import React from "react";
import { connect } from "react-redux";

import "./styles/App.scss";

// action creators
import { showName } from "./store/actions";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  showName = e => {
    this.props.showName();
    // console.log("In showName!");
  };

  render() {
    return <button onClick={this.showName}>Show Name</button>;
  }
}

const mapStateToProps = state => {
  return {
    data: state.name
  };
};

export default connect(
  mapStateToProps,
  { showName }
)(App);
