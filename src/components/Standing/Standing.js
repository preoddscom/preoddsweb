import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import Loading from "../Loading/Loading";
import OverallStanding from "./OverallStanding";
import HomeStanding from "./HomeStanding";
import AwayStanding from "./AwayStanding";
import * as Util from "../settings/Util";

class Standing extends Component {
  state = {
    isLoading: null,
    leagueId: null,
    seasonId: null,
    stageId: null,
    groupId: null,
    standings: []
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ isLoading: true });
    this.fetchStandings(
      nextProps.leagueId,
      nextProps.seasonId,
      nextProps.stageId,
      nextProps.groupId
    );
  }
  componentDidMount() {
    this.mount = false;
    this.setState({ isLoading: true });
    this.fetchStandings(
      this.props.leagueId,
      this.props.seasonId,
      this.props.stageId,
      this.props.groupId
    );
  }

  componentWillUnmount() {
    this.mount = false;
  }

  fetchStandings(leagueId, seasonId, stageId, groupId) {
    this.mount = true;
    fetch(
      `${
        Util.API_URL
      }standings/${leagueId}/${seasonId}/${stageId}/${groupId}&lang=${
        this.props.lang
      }&apiKey=${Util.API_KEY}`,
      { headers: { "Access-Control-Allow-Origin": "*" } }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (this.mount) {
          this.setState({ standings: data, isLoading: false });
        }
      });
  }

  render() {
    const { standings, isLoading } = this.state;
    if (isLoading) {
      return (
        <React.Fragment>
          <div className="text-center">
            <Loading loading={isLoading} />
            <br />
            <FormattedMessage id="loading" defaultMessage="Loading" />
          </div>
        </React.Fragment>
      );
    } else {
      return standings && standings.length > 0 ? (
        <div className="card card-dark card-outline">
          <div className="card-header d-flex p-0">
            <h3 className="card-title p-3">
              {" "}
              <FormattedMessage
                id="standing.standing"
                defaultMessage="Standing"
              />
            </h3>
            <ul className="nav nav-pills ml-auto p-2">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#overall"
                  data-toggle="tab"
                >
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
}

export default Standing;
