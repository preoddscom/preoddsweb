import React, { Component } from "react";
import ReactPlayer from "react-player";
export default class FixtureDetailHighlight extends Component {
  render() {
    const { highlight } = this.props;

    return highlight.map(h => {
      return (
        <ReactPlayer
          key={h.id}
          url={h.location}
          playing={false}
          width={250}
          height={150}
          controls={true}
        />
      );
    });
  }
}
