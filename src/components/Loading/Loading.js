import React from "react";
const Loading = props => (
  <div className="spinner-border text-dark" role="status">
    <span className="sr-only">{props.text}</span>
  </div>
);

Loading.defaultProps = {
  text: "Loading..."
};

export default Loading;
