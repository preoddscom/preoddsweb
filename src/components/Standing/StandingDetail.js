import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import OverallStanding from "./OverallStanding";
import HomeStanding from "./HomeStanding";
import AwayStanding from "./AwayStanding";

class StandingDetail extends Component {
  state = {
    standings: []
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ standings: nextProps.standings });
  }
  componentDidMount() {
    const { standings } = this.props;
    this.setState({ standings });
  }

  render() {
    const { standings } = this.state;

    return standings && standings.length > 0 ? (
      <div className="card card-dark card-outline">
        <div className="card-header d-flex p-0">
          <h3 className="card-title p-3">
            <FormattedMessage
              id="standing.standing"
              defaultMessage="Standing"
            />
          </h3>
          <ul className="nav nav-pills ml-auto p-2">
            <li className="nav-item">
              <a className="nav-link active" href="#overall" data-toggle="tab">
                <FormattedMessage
                  id="standing.overall"
                  defaultMessage="Overall"
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#home" data-toggle="tab">
                <FormattedMessage id="standing.home" defaultMessage="Home" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#away" data-toggle="tab">
                <FormattedMessage id="standing.away" defaultMessage="Away" />
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <div className="tab-content">
            <div className="tab-pane active" id="overall">
              <OverallStanding standings={standings} />
            </div>
            <div className="tab-pane" id="home">
              <HomeStanding standings={standings} />
            </div>
            <div className="tab-pane" id="away">
              <AwayStanding standings={standings} />
            </div>
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default StandingDetail;
