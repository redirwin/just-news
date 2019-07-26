import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import "../styles/App.scss";

// action creators
import { getNews } from "../store/actions";

// components
import Headline from "./Headline";

const Headlines = props => {
  useEffect(() => {
    props.headlines.map(headline => {
      return <Headline headline={headline} />;
    });
  });

  function getNews(e) {
    props.getNews();
  }

  if (props.isFetching) {
    return <Loader type="Puff" color="#00BFFF" height="100" width="100" />;
  }

  return (
    <div>
      <button onClick={getNews}>Get the News!</button>
      {props.headlines.map(headline => {
        return <Headline headline={headline} />;
      })}
    </div>
  );
};

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
