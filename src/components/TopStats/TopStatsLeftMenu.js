import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import Loading from "../Loading/Loading";
import TopGoal from "./TopGoal";
import TopAssist from "./TopAssist";
import TopCard from "./TopCard";
import * as Util from "../settings/Util";

class TopStats extends Component {
  state = {
    isLoading: null,
    leagueId: null,
    seasonId: null,
    stageId: null,
    topStats: null
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ isLoading: true });
    this.fetchTopstats(
      nextProps.leagueId,
      nextProps.seasonId,
      nextProps.stageId
    );
  }
  componentDidMount() {
    this.mount = false;
    this.setState({ isLoading: true });
    this.fetchTopstats(
      this.props.leagueId,
      this.props.seasonId,
      this.props.stageId
    );
  }
  componentWillUnmount() {
    this.mount = false;
  }

  fetchTopstats(leagueId, seasonId, stageId) {
    this.mount = true;
    fetch(
      `${Util.API_URL}topScorer/${leagueId}/${seasonId}/${stageId}&lang=${
        this.props.lang
      }&apiKey=${Util.API_KEY}`,
      {
        headers: { "Access-Control-Allow-Origin": "*" }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (this.mount) {
          this.setState({ topStats: data, isLoading: false });
        }
      });
  }

  render() {
    const { topStats, isLoading } = this.state;

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
      let goalScorerSort = topStats
        ? topStats.goalScorer.sort(function(a, b) {
            return b.goals - a.goals;
          })
        : null;

      let assistScorerSort = topStats
        ? topStats.assistsScorer.sort(function(a, b) {
            return b.assists - a.assists;
          })
        : null;

      let cardScorerSort = topStats
        ? topStats.cardScorer.sort(function(a, b) {
            return b.yellowcards - a.yellowcards;
          })
        : null;

      return topStats ? (
        <React.Fragment>
          <div className="card shadow-sm">
            <div className="card-header d-flex p-0">
              <h3 className="card-title p-3">
                {" "}
                <FormattedMessage id="top.stats" defaultMessage="Stats" />
              </h3>
              <ul className="nav nav-pills ml-auto p-2">
                <li className="nav-item">
                  <a className="nav-link active" href="#goal" data-toggle="tab">
                    <FormattedMessage id="top.goal" defaultMessage="Goal" />
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#assist" data-toggle="tab">
                    <FormattedMessage id="top.assist" defaultMessage="Assist" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#card" data-toggle="tab">
                    <FormattedMessage id="top.card" defaultMessage="Kart" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="tab-content">
                <div className="tab-pane active" id="goal">
                  <TopGoal goalScorerSort={goalScorerSort} />
                </div>
                <div className="tab-pane " id="assist">
                  <TopAssist assistScorerSort={assistScorerSort} />
                </div>
                <div className="tab-pane" id="card">
                  <TopCard cardScorerSort={cardScorerSort} />
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : null;
    }
  }
}

export default TopStats;
