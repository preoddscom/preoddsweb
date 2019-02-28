import React, { Component } from "react";

class Cross extends Component {
  render() {
    return (
      <header id="home-section">
        <div className="dark-overlay">
          <div className="home-inner container">
            <div className="row">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <div className="p-3">
                    <i className="fas fa-check fa-lg" />
                  </div>
                  <div className="p4" style={{ fontSize: "24px" }}>
                    500 Leagues
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="p-3">
                    <i className="fas fa-check fa-lg" />
                  </div>
                  <div className="p4" style={{ fontSize: "24px" }}>
                    Champions League
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="p-3">
                    <i className="fas fa-check fa-lg" />
                  </div>
                  <div className="p4" style={{ fontSize: "24px" }}>
                    UEFA Europe League
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <div className="p-3">
                    <i className="fas fa-check fa-lg" />
                  </div>
                  <div className="p3" style={{ fontSize: "24px" }}>
                    Odds
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="p-3">
                    <i className="fas fa-check fa-lg" />
                  </div>
                  <div className="p3" style={{ fontSize: "24px" }}>
                    Analysis
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="p-3">
                    <i className="fas fa-check fa-lg" />
                  </div>
                  <div className="p3" style={{ fontSize: "24px" }}>
                    Coupons Guess
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Cross;
