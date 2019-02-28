import React, { Component } from "react";
import OddsItemTable from "./OddsItemTable";
import FixtureOddsHeaderResult from "./FixtureOddsHeaderResult";

class OddsItem extends Component {
  render() {
    const { oddAnalysisArray, selectedMarketLabel } = this.props;

    if (oddAnalysisArray !== null && oddAnalysisArray.length > 0) {
      return oddAnalysisArray.map((fixture, i) => {
        return (
          <div className="col-lg-6" key={"oddsItem_" + i}>
            <div className="card mb-3">
              <img
                src="/img/bg/odds.jpeg"
                height="100"
                className="card-img"
                alt="logo"
              />

              <div className="card-img-overlay ">
                <div className="d-flex justify-content-center ">
                  <div className="d-flex flex-column align-items-center ">
                    <div className="">
                      <img
                        src={
                          fixture.localTeam.logoPath
                            ? fixture.localTeam.logoPath
                            : null
                        }
                        width="30"
                        height="30"
                        alt="teamlogo"
                      />
                    </div>
                    <div className="">
                      <span
                        className="d-inline-block text-truncate"
                        style={{
                          maxWidth: "150px",
                          fontSize: "16px",
                          color: "white"
                        }}
                      >
                        {fixture.localTeam
                          ? fixture.localTeam.name
                            ? fixture.localTeam.name
                            : null
                          : null}
                      </span>
                    </div>
                  </div>

                  <FixtureOddsHeaderResult fixtureDetail={fixture} />

                  <div className="d-flex flex-column align-items-center">
                    <div className="">
                      <img
                        src={
                          fixture.visitorTeam.logoPath
                            ? fixture.visitorTeam.logoPath
                            : null
                        }
                        width="30"
                        height="30"
                        alt="teamlogo"
                      />
                    </div>
                    <div className="">
                      <span
                        className="d-inline-block text-truncate"
                        style={{
                          maxWidth: "150px",
                          fontSize: "16px",
                          color: "white"
                        }}
                      >
                        {fixture.visitorTeam
                          ? fixture.visitorTeam.name
                            ? fixture.visitorTeam.name
                            : null
                          : null}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title mb-2">
                  <div className="d-flex align-items-center mb-2">
                    <div
                      className="badge badge-info"
                      style={{ fontSize: "12px" }}
                    >
                      {selectedMarketLabel}
                    </div>

                    <div className="ml-auto">
                      <img
                        src={fixture.league.country.logo}
                        style={{ width: "24px" }}
                        alt="logo"
                      />
                    </div>
                    <div
                      className="ml-1 text-danger"
                      style={{ fontSize: "12px" }}
                    >
                      <span>
                        {fixture.league.country.name} {" - "}
                      </span>
                      <span className="font-weight-bold ml-1">
                        {fixture.league.name}
                      </span>{" "}
                    </div>
                  </div>
                </h5>
                <OddsItemTable odds={fixture.odds} />
              </div>
            </div>
          </div>
        );
      });
    } else {
      return null;
    }
  }
}

export default OddsItem;
