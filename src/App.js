import React from "react";

import "./styles/App.scss";

// components
import Headlines from "./components/Headlines";

function App() {
  return <Headlines />;
}

const mapStateToProps = state => {
  return {
    results: state.results
  };
};

export default App;
