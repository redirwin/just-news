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
    // console.log("Here they are: ", this.props.headlines.title);
    return (
      <div>
        <button onClick={this.getNews}>Get the News!</button>
        <div>{this.headlines("Hello")}</div>
        <div>
          {this.props.headlines.map(headline => {
            return headline.title;
          })}
        </div>
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
