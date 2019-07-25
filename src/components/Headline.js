import React from "react";

function Headline(props) {
  return (
    <section className="article">
      <h3>{props.headline.title}</h3>
      <p>{props.headline.content}</p>
    </section>
  );
}

export default Headline;
