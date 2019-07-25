import React from "react";
import { connect } from "react-redux";

import "./styles/App.scss";

// action creators
import { getNews } from "./store/actions";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  getNews = e => {
    this.props.getNews();
    // console.log("In getNews!");
  };

  render() {
    return <button onClick={this.getNews}>Show Name</button>;
  }
}

const mapStateToProps = state => {
  return {
    data: state.name
  };
};

export default connect(
  mapStateToProps,
  { getNews }
)(App);
