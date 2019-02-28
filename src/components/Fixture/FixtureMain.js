import React, { Component } from "react";
import Loading from "../Loading/Loading";
import { FormattedMessage } from "react-intl";
import Fixture from "./Fixture";
import FixturePrev from "../PrevFixture/FixturePrev";
import Standing from "../Standing/Standing";
import TopStats from "../TopStats/TopStats";
import LeaguesMenu from "../League/LeaguesMenu";
import TopStatsLeftMenu from "../TopStats/TopStatsLeftMenu";
import * as Util from "../settings/Util";

class FixtureMain extends Component {
  state = {
    isLoading: true,
    seasonsData: [],
    seasonsArray: [],
    stagesArray: [],
    roundsArray: [],
    selectedSeason: 0,
    selectedStage: 0,
    selectedRound: 0,
    selectedGroup: 0,
    country: null,
    leagueId: "",
    leagueName: "",
    lang: ""
  };

  componentWillReceiveProps(nextProps) {
    const { leagueId, leagueName, lang } = nextProps;
    this.setState({ isLoading: true, leagueId, leagueName, lang }, () => {
      this.getSeasonStageRound(leagueId, leagueName, lang);
    });
  }

  componentDidMount() {
    this.mount = false;
    const { leagueId, leagueName, lang } = this.props;
    this.setState({ isLoading: true, leagueId, leagueName, lang }, () => {
      this.getSeasonStageRound(leagueId, leagueName, lang);
    });
  }

  componentWillUnmount() {
    this.mount = false;
  }
  getSeasonStageRound = (leagueId, leagueName, lang) => {
    this.mount = true;
    fetch(
      `${Util.API_URL}leagueDetailInfo/${leagueId}&lang=${lang}&apiKey=${
        Util.API_KEY
      }`,
      {
        headers: { "Access-Control-Allow-Origin": "*" }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setSeasonStageRound(data.seasons, 0, null);
        if (this.mount) {
          this.setState(prevState => ({
            ...prevState,
            isLoading: false,
            seasonsData: data.seasons.map(seasonData => ({ ...seasonData })),
            seasonsArray: [...this.returnSeasons],
            stagesArray: [...this.returnStages],
            roundsArray: [...this.returnRounds],
            selectedSeason: this.selectedSeason,
            selectedStage: this.selectedStage,
            selectedRound: this.selectedRound,
            selectedGroup: this.selectedGroup,
            country: data.country,
            leagueId,
            leagueName
          }));
        }
      });
  };

  setSeasonStageRound = (seasonsData, selectedSeason, selectedStage) => {
    this.returnSeasons = [];
    this.returnStages = [];
    this.returnRounds = [];
    this.selectedGroup = 0;
    this.selectedRound = 0;
    if (selectedSeason === 0) {
      //ilk geliş
      this.selectedSeason = 0;
      this.selectedStage = 0;
      seasonsData.forEach((season, i) => {
        this.returnSeasons.push(season.name);
        if (i === selectedSeason) {
          this.selectedSeason = i;
          season.stages.forEach((stage, j) => {
            if (stage.id === season.currentStageId) {
              this.selectedStage = j;
            }
            this.returnStages.push(stage.name);
          });
        }
      });

      if (selectedStage) this.selectedStage = selectedStage;

      this.selectedGroup =
        seasonsData[this.selectedSeason].stages[this.selectedStage].groupId;
      seasonsData[this.selectedSeason].stages[
        this.selectedStage
      ].rounds.forEach((round, i) => {
        if (seasonsData[this.selectedSeason].currentRoundId === round.id) {
          this.selectedRound = i;
        }
        this.returnRounds.push(round.name);
      });
    } else {
      //değişiklik olduğunda
      this.returnSeasons = [...this.state.seasonsArray];
      this.selectedSeason = selectedSeason;
      this.selectedStage = 0;
      this.selectedGroup = 0;
      this.selectedRound = 0;
      if (selectedStage) {
        this.selectedStage = selectedStage;
        this.returnStages = [...this.state.stagesArray];
        this.selectedGroup =
          seasonsData[selectedSeason].stages[selectedStage].groupId;
        seasonsData[selectedSeason].stages[selectedStage].rounds.forEach(
          round => this.returnRounds.push(round.name)
        );
      } else {
        seasonsData[selectedSeason].stages.forEach(stage => {
          this.returnStages.push(stage.name);
        });
        this.selectedGroup =
          seasonsData[selectedSeason].stages[this.selectedStage].groupId;
        seasonsData[selectedSeason].stages[this.selectedStage].rounds.forEach(
          round => this.returnRounds.push(round.name)
        );
      }
    }
  };

  onStageChange = e => {
    this.selectedSeason = this.state.selectedSeason;
    this.selectedStage = e.target.selectedIndex;
    this.selectedRound = 0;
    this.setSeasonStageRound(
      this.state.seasonsData,
      this.state.selectedSeason,
      e.target.selectedIndex
    );

    this.setState(prevState => ({
      ...prevState,
      seasonsArray: [...this.returnSeasons],
      stagesArray: [...this.returnStages],
      roundsArray: [...this.returnRounds],
      selectedSeason: this.selectedSeason,
      selectedStage: this.selectedStage,
      selectedRound: this.selectedRound,
      selectedGroup: this.selectedGroup
    }));
  };

  onSeasonChange = e => {
    this.selectedSeason = e.target.selectedIndex;
    this.selectedStage = 0;
    this.selectedRound = 0;

    this.setSeasonStageRound(
      this.state.seasonsData,
      e.target.selectedIndex,
      null
    );
    this.setState(prevState => ({
      ...prevState,
      seasonsArray: [...this.returnSeasons],
      stagesArray: [...this.returnStages],
      roundsArray: [...this.returnRounds],
      selectedSeason: this.selectedSeason,
      selectedStage: this.selectedStage,
      selectedRound: this.selectedRound,
      selectedGroup: this.selectedGroup
    }));
  };

  onRoundChange = e => {
    this.setState({ selectedRound: e.target.selectedIndex });
  };

  render() {
    const {
      isLoading,
      country,
      leagueId,
      leagueName,
      roundsArray
    } = this.state;

    const roundLastIndex = roundsArray.length - 1;

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
      if (leagueId !== null && leagueName !== null) {
        return (
          <React.Fragment>
            <div className="row">
              {this.state.seasonsData.length > 0 ? (
                <React.Fragment>
                  <div className="col-lg-4 d-none d-lg-block">
                    <TopStatsLeftMenu
                      leagueId={leagueId}
                      seasonId={
                        this.state.seasonsData[this.state.selectedSeason].id
                      }
                      stageId={
                        this.state.seasonsData[this.state.selectedSeason]
                          .stages[this.state.selectedStage].id
                      }
                    />
                  </div>
                  <div className="col-lg-5">
                    <div className="card card-danger card-outline ">
                      <div className="card-header bg-light">
                        <h3 className="card-title">
                          <img
                            src={country.logo}
                            alt="logo"
                            className="img-fluid"
                            style={{ width: "24px" }}
                          />{" "}
                          <span>{country.name}</span> {" - "}{" "}
                          <span>{leagueName} </span>
                          <span
                            style={{ fontSize: "13px" }}
                            className=" float-right"
                          >
                            <FormattedMessage
                              id="fixture.current"
                              defaultMessage="Current Fixture"
                            />
                          </span>
                        </h3>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-5">
                            <select
                              className="form-control form-control-sm"
                              onChange={this.onStageChange}
                            >
                              {this.state.stagesArray.map((stage, index) => {
                                return (
                                  <option
                                    key={index}
                                    selected={
                                      index === this.selectedStage
                                        ? true
                                        : false
                                    }
                                  >
                                    {stage}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <div className="col-4">
                            <select
                              className="form-control form-control-sm"
                              onChange={this.onSeasonChange}
                            >
                              {this.state.seasonsArray.map((season, index) => {
                                return (
                                  <option
                                    key={index}
                                    selected={
                                      index === this.selectedSeason
                                        ? true
                                        : false
                                    }
                                  >
                                    {season}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <div className="col-3">
                            <select
                              className="form-control form-control-sm"
                              onChange={this.onRoundChange}
                            >
                              {this.state.roundsArray.map((round, index) => {
                                return (
                                  <option
                                    key={index}
                                    selected={
                                      index === this.selectedRound
                                        ? true
                                        : false
                                    }
                                  >
                                    {round}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Fixture
                      lang={this.props.lang}
                      leagueId={leagueId}
                      seasonId={
                        this.state.seasonsData[this.state.selectedSeason].id
                      }
                      stageId={
                        this.state.seasonsData[this.state.selectedSeason]
                          .stages[this.state.selectedStage].id
                      }
                      roundId={
                        this.state.seasonsData[this.state.selectedSeason]
                          .stages[this.state.selectedStage].rounds[
                          this.state.selectedRound
                        ].id
                      }
                      groupId={this.state.selectedGroup}
                    />
                  </div>
                </React.Fragment>
              ) : null}

              <div className="col-lg-3">
                <LeaguesMenu lang={this.props.lang} />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7">
                <Standing
                  leagueId={leagueId}
                  seasonId={
                    this.state.seasonsData[this.state.selectedSeason].id
                  }
                  stageId={
                    this.state.seasonsData[this.state.selectedSeason].stages[
                      this.state.selectedStage
                    ].id
                  }
                  groupId={this.state.selectedGroup}
                />
              </div>
              {roundLastIndex === this.state.selectedRound ? null : (
                <div className="col-lg-5">
                  <div className="card card-danger card-outline bg-light">
                    <div className="card-header">
                      <h3 className="card-title">
                        <img
                          src={country.logo}
                          alt="logo"
                          className="img-fluid"
                          style={{ width: "24px" }}
                        />{" "}
                        <span>{country.name}</span> {" - "}{" "}
                        <span>{leagueName} </span>
                        <span
                          style={{ fontSize: "13px" }}
                          className=" float-right"
                        >
                          <FormattedMessage
                            id="fixture.previous"
                            defaultMessage="Previous Fixture"
                          />
                        </span>
                      </h3>
                    </div>
                  </div>

                  <FixturePrev
                    lang={this.props.lang}
                    leagueId={leagueId}
                    seasonId={
                      this.state.seasonsData[this.state.selectedSeason].id
                    }
                    stageId={
                      this.state.seasonsData[this.state.selectedSeason].stages[
                        this.state.selectedStage
                      ].id
                    }
                    roundId={
                      this.state.seasonsData[this.state.selectedSeason].stages[
                        this.state.selectedStage
                      ].rounds[this.state.selectedRound + 1].id
                    }
                    groupId={this.state.selectedGroup}
                  />
                </div>
              )}
            </div>

            <TopStats
              className="mt-3"
              leagueId={leagueId}
              seasonId={this.state.seasonsData[this.state.selectedSeason].id}
              stageId={
                this.state.seasonsData[this.state.selectedSeason].stages[
                  this.state.selectedStage
                ].id
              }
            />
          </React.Fragment>
        );
      } else return null;
    }
  }
}
export default FixtureMain;
