import React, { Component } from "react";
import "../../css/FixtureDetailStatsItem.css";
class FixtureDetailStatsItem extends Component {
  render() {
    const { label, localValue, visitorValue } = this.props;

    let yuzde = Math.ceil((localValue * 100) / (localValue + visitorValue));
    if (yuzde === 0) yuzde = 15;
    if (yuzde === 100) yuzde = yuzde - 15;
    return (
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h3 className="progress-title" style={{ fontSize: "13px" }}>
            {label}
          </h3>
          <br />
          <div className="progress">
            <div
              className="progress-bar"
              style={{
                width: `${isNaN(yuzde) ? 50 : yuzde}%`,
                background: "#97c513"
              }}
            >
              <div className="progress-value">
                <span className="float-left">{localValue}</span>{" "}
                <span className="float-right ml-5">{visitorValue}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FixtureDetailStatsItem;
