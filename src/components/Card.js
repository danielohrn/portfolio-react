import React from "react";

const Card = ({ children, backgroundColor, color, width }) => (
  <div
    style={{
      ...styles.card,
      backgroundColor,
      color,
      width
    }}
  >
    {children}
  </div>
);

const styles = {
  card: {
    padding: "1em",
    margin: ".3em"
  }
};

export default Card;
