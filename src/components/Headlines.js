import React from "react";
import { connect } from "react-redux";

import "../styles/App.scss";

// action creators
import { getNews } from "../store/actions";

// components
import Headline from "./Headline";

class Headlines extends React.Component {
  constructor(props) {
    super(props);
  }

  getNews = e => {
    this.props.getNews();
  };

  headlines = () => {
    this.props.headlines.map(headline => {
      return <div>{headline.title}</div>;
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.getNews}>Get the News!</button>
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
    headlines: state.headlines
  };
};

export default connect(
  mapStateToProps,
  { getNews }
)(Headlines);
