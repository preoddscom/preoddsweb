import React, { Component } from "react";
import LineupFix from "./LineupFix";
class LineUpDetail extends Component {
  render() {
    return (
      <div className="card card-dark card-outline">
        <div className="card-header d-flex p-0">
          <h3 className="card-title p-3">Lineup #11</h3>
          <ul className="nav nav-pills ml-auto p-2">
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#homeLineup"
                data-toggle="tab"
              >
                Home#11
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#awayLineup" data-toggle="tab">
                Away#11
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <div className="tab-content">
            <div className="tab-pane active" id="homeh2h">
              <LineupFix players={this.props.fixtureDetail.localTeamLineup} />
            </div>
            <div className="tab-pane" id="awayh2h">
              <LineupFix players={this.props.fixtureDetail.visitorTeamLineup} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LineUpDetail;
