import React, { Component } from "react";
import FixtureDetailH2H from "./FixtureDetailH2H";

export default class Head2Head extends Component {
  render() {
    const { fixtureDetail } = this.props;
    return (
      <div className="card card-dark card-outline">
        <div className="card-header d-flex p-0">
          <h3 className="card-title p-3">H2H</h3>
          <ul className="nav nav-pills ml-auto p-2">
            <li className="nav-item">
              <a className="nav-link active" href="#homeh2h" data-toggle="tab">
                <img
                  src={fixtureDetail.localTeam.logoPath}
                  className="img-fluid"
                  style={{ width: "24px" }}
                  alt="logo"
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#awayh2h" data-toggle="tab">
                <img
                  src={fixtureDetail.visitorTeam.logoPath}
                  className="img-fluid"
                  style={{ width: "24px" }}
                  alt="logo"
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#overallh2h" data-toggle="tab">
                H2H
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <div className="tab-content">
            <div className="tab-pane active" id="homeh2h">
              <FixtureDetailH2H
                fixtureMatches={fixtureDetail.localTeamLastMatches}
              />
            </div>
            <div className="tab-pane" id="awayh2h">
              <FixtureDetailH2H
                fixtureMatches={fixtureDetail.visitorTeamLastMatches}
              />
            </div>

            <div className="tab-pane" id="overallh2h">
              <FixtureDetailH2H
                fixtureMatches={fixtureDetail.headToHeadLastMatches}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
