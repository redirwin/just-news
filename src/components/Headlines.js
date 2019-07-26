import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import "../styles/App.scss";

// actions
import { getNews } from "../store/actions";

// components
import Headline from "./Headline";

class Headlines extends React.Component {
  componentDidMount() {
    this.props.getNews();
  }

  render() {
    if (this.props.isFetching) {
      return <Loader type="Puff" color="#00BFFF" height="100" width="100" />;
    }

    return (
      <div>
        {this.props.headlines.map(headline => {
          return <Headline headline={headline} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    totalResults: state.totalResults,
    headlines: state.headlines,
    isFetching: state.isFetching
  };
};

export default connect(
  mapStateToProps,
  { getNews }
)(Headlines);
