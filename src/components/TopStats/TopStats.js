import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import Loading from "../Loading/Loading";
import TopGoal from "../TopStats/TopGoal";
import TopAssist from "../TopStats/TopAssist";
import TopCard from "../TopStats/TopCard";
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
      { headers: { "Access-Control-Allow-Origin": "*" } }
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

      return (
        <div className="row">
          <div className="col-lg-4 d-md-none">
            <TopGoal goalScorerSort={goalScorerSort} />
          </div>
          <div className="col-lg-4 d-md-none">
            <TopCard cardScorerSort={cardScorerSort} />
          </div>
          <div className="col-lg-4 d-md-none">
            <TopAssist assistScorerSort={assistScorerSort} />
          </div>
        </div>
      );
    }
  }
}

export default TopStats;
