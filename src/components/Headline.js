import React from "react";

import styled from "styled-components";

export default function Headline(props) {
  //   const openLink = url => {
  //     window.open(url, "_blank");
  //     win.focus();
  //   };

  return (
    <Article>
      <h3>{props.headline.title}</h3>
      <p>{props.headline.content}</p>
      <a href={props.headline.url}>Read more...</a>
    </Article>
  );
}

const Article = styled.section`
  margin: 2rem 0;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: 1px solid black;
  h3 {
    margin: 0;
  }
`;
