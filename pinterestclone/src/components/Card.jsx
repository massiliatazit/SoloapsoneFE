import React from "react";

function Card(props) {
  return (
    <div
      style={{
        ...styles.card,
        ...styles[props.size],
      }}
    ></div>
  );
}
const img_url =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg";
const styles = {
  card: {
    margin: "15px 10px",
    padding: 0,
    borderRadius: "16px",
    backgroundImage: `url(${img_url})`,

    objectFit: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minWidth: "100%",
    minHeight: "100%",
  },
  small: {
    gridRowEnd: "span 26",
  },
  medium: {
    gridRowEnd: "span 33",
  },
  large: {
    gridRowEnd: "span 45",
  },
};

export default Card;
