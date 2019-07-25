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
    return (
      <>
        <button onClick={this.getNews}>Get the News!</button>
        <p>{this.props.results} total results.</p>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    results: state.results
  };
};

export default connect(
  mapStateToProps,
  { getNews }
)(App);
