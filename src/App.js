import React from "react";

import "./styles/App.scss";
import styled from "styled-components";

// components
import Headlines from "./components/Headlines";

export default function App() {
  return (
    <AppWrapper>
      <Headlines />
    </AppWrapper>
  );
}

const mapStateToProps = state => {
  return {
    results: state.results
  };
};

const AppWrapper = styled.div`
  width: 80%;
  margin: 5rem auto;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

  button {
  }
`;
