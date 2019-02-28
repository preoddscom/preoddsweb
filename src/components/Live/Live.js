import React, { Component } from "react";
import moment from "moment";
import Loading from "../Loading/Loading";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import LiveFixtureItem from "./LiveFixtureItem";
import LiveFavorite from "./LiveFavorite";
import * as Util from "../settings/Util";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import tr from "date-fns/locale/tr";
import en from "date-fns/locale/en-US";
import { ToastContainer, toast } from "react-toastify";
import GoalLiveItem from "./GoalLiveItem";
import TimeStatusLiveItem from "./TimeStatusLiveItem";

class Live extends Component {
  state = {
    ts: 0,
    isLoading: true,
    today: moment(new Date()).format("YYYY-MM-DD"),
    checked: false,
    fixtureForLeagueData: [],
    fixtureForLeagueDataPrev: [],
    fixtureForLeague: [],
    fixtureForLeagueLive: [],
    liveLength: 0,
    allLength: 0,
    favoriteListArray: []
  };

  notifyGoal = (fixtureItem, score) =>
    toast.error(this.createGoalElement(fixtureItem, score), {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false
    });

  notifyTimeStatus = fixtureItem => {
    let result = (
      <div>
        <Link
          style={{
            textDecoration: "none !important",
            link: "none",
            color: "black"
          }}
          to={{
            pathname: "/fixtureDetail",
            state: {
              fixtureId: fixtureItem.id,
              lang: this.props.lang,
              today: this.state.today
            }
          }}
        >
          <span className="d-inline-block text-truncate">
            <img
              className="mr-2"
              src="/img/preodds/whistle.jpg"
              alt="logo"
              style={{ width: "16px", height: "16px" }}
            />
          </span>
          <span
            className="mr-1 d-inline-block text-truncate"
            style={{ color: "#000000" }}
          >
            {fixtureItem.timeStatus === "HT" ? (
              <FormattedMessage id="detail.HT" defaultMessage="HT" />
            ) : (
              <FormattedMessage id="detail.FT" defaultMessage="FT" />
            )}
          </span>
          <span
            className="d-inline-block text-truncate mr-1 text-white"
            style={{ maxWidth: "85px" }}
          >
            {fixtureItem.localTeam.name}
          </span>
          <span
            className="d-inline-block text-truncate mr-1"
            style={{ color: "#ffffff" }}
          >
            {fixtureItem.localTeamScore}
          </span>
          <span
            className="d-inline-block text-truncate mr-1"
            style={{ color: "#ffffff" }}
          >
            {" - "}
          </span>
          <span
            className="d-inline-block text-truncate mr-1"
            style={{ color: "#ffffff" }}
          >
            {fixtureItem.visitorTeamScore}
          </span>
          <span
            className="d-inline-block text-truncate text-white"
            style={{ maxWidth: "85px" }}
          >
            {fixtureItem.visitorTeam.name}
          </span>
        </Link>
      </div>
    );

    toast.error(result, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false
    });
  };

  createTimeStatusElement = fixtureItem => {
    return <TimeStatusLiveItem fixtureItem={fixtureItem} />;
  };

  createGoalElement = (fixtureItem, score) => {
    return (
      <GoalLiveItem
        lang={this.props.lang}
        fixtureItem={fixtureItem}
        score={score}
        today={this.state.today}
      />
    );
  };

  componentDidMount() {
    this.mount = false;
    if (this.props.lang.substring(0, 2) === "tr")
      registerLocale("locale_datePicker", tr);
    else registerLocale("locale_datePicker", en);

    this.getFixtureForLive();
  }
  componentWillUnmount() {
    this.stopInterval();
    this.mount = false;
  }

  startInterval = () => {
    this.interval = setInterval(this.getFixtureForLive, 10000);
  };

  stopInterval = () => {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  };
  handleChange = () => {
    const { checked } = this.state;
    if (!checked) {
      this.setState({
        fixtureForLeagueData: this.state.fixtureForLeagueLive,
        fixtureForLeagueDataPrev: [],
        checked: !checked
      });
    } else {
      this.setState({
        fixtureForLeagueDataPrev: [],
        fixtureForLeagueData: this.state.fixtureForLeague,
        checked: !checked
      });
    }
  };

  onChange = date => {
    if (
      moment(new Date()).format("YYYY-MM-DD") ===
      moment(date).format("YYYY-MM-DD")
    )
      this.startInterval();
    else this.stopInterval();

    this.setState(
      {
        ts: 1,
        isLoading: true,
        today: moment(date).format("YYYY-MM-DD")
      },
      () => {
        this.getFixtureForLive();
      }
    );
  };
  getFixtureForLive = () => {
    let notifyList = [];
    let fixtureLiveDataPrev = [];
    let fixtureLiveData = [];
    this.mount = true;

    //live maçlar seçili ise, uyarı ver
    if (this.state.checked) {
      if (this.state.fixtureForLeagueDataPrev)
        this.state.fixtureForLeagueDataPrev.forEach(fixLeagueData => {
          fixLeagueData.fixture.forEach(result => {
            fixtureLiveDataPrev.push(result);
          });
        });

      if (this.state.fixtureForLeagueData)
        this.state.fixtureForLeagueData.forEach(fixLeagueData => {
          fixLeagueData.fixture.forEach(result => {
            fixtureLiveData.push(result);
          });
        });

      //live maçlar içinde bitenleri bul
      notifyList = fixtureLiveDataPrev.filter(
        livePrev => !fixtureLiveData.find(live => livePrev.id === live.id)
      );

      if (notifyList && notifyList !== undefined && notifyList.length > 0) {
        notifyList.forEach(notify => {
          this.notifyTimeStatus(notify);
        });
      }
    }

    fetch(
      `${Util.API_URL}fixtureOfDate/date=${this.state.today}&ts=${
        this.state.ts
      }&lang=${this.props.lang}&timeZone=${Util.API_TIMEZONE}&apiKey=${
        Util.API_KEY
      }`,
      {
        headers: { "Access-Control-Allow-Origin": "*" }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(res => {
        let fixtureForLeagueData = res.fixtureForLeague;
        let fixForLive = res.fixtureForLeagueLive;
        let fixtureForLeagueFixturData = [];
        let favoriteListArray = [];
        let favoriteListArrayStorage = [];
        let liveLength = 0;
        let allLength = 0;

        /**Find live length */
        if (fixForLive)
          fixForLive.forEach(fixLeagueLive => {
            fixLeagueLive.fixture.forEach(() => {
              liveLength += 1;
            });
          });

        if (fixtureForLeagueData)
          fixtureForLeagueData.forEach(fixLeagueData => {
            fixLeagueData.fixture.forEach(result => {
              fixtureForLeagueFixturData.push(result);
              allLength += 1;
            });
          });

        //favorite son durumunu fixtureForLeagueFixturData dan çek
        favoriteListArrayStorage = JSON.parse(
          localStorage.getItem("favoriteListArray")
        );

        if (favoriteListArrayStorage && favoriteListArrayStorage !== undefined)
          favoriteListArray = [...favoriteListArrayStorage];

        let newFavoriteList = [];
        favoriteListArray.forEach(favorite => {
          fixtureForLeagueFixturData.forEach(fixtureItem => {
            if (fixtureItem.id === favorite.id) {
              //Maç devam ediyrosa
              if (
                fixtureItem.timeStatus !== "FT" &&
                fixtureItem.timeStatus !== "FT_PEN" &&
                fixtureItem.timeStatus !== "AET"
              )
                newFavoriteList.push(fixtureItem);
            }
          });
        });

        newFavoriteList.forEach(favorite => {
          favorite.isFavorite = "1";
        });

        localStorage.setItem(
          "favoriteListArray",
          JSON.stringify(newFavoriteList)
        );

        if (this.mount) {
          this.setState(
            prevState => ({
              isLoading: false,
              fixtureForLeague: res.fixtureForLeague,
              fixtureForLeagueLive: res.fixtureForLeagueLive,
              fixtureForLeagueData: prevState.checked
                ? res.fixtureForLeagueLive
                : res.fixtureForLeague,
              fixtureForLeagueDataPrev: prevState.checked
                ? prevState.fixtureForLeagueData
                : [],
              favoriteListArray: newFavoriteList,
              allLength,
              liveLength
            }),
            () => {
              if (
                !this.interval &&
                moment(new Date()).format("YYYY-MM-DD") === this.state.today
              ) {
                this.startInterval();
              }
            }
          );
        }
      });
  };

  addFavoriteLive = fixtureItem => {
    let favoriteListArray = [...this.state.favoriteListArray];
    favoriteListArray.push(fixtureItem);

    favoriteListArray.forEach(favorite => {
      favorite.isFavorite = "1";
    });

    localStorage.setItem(
      "favoriteListArray",
      JSON.stringify(favoriteListArray)
    );

    this.setState({ favoriteListArray: favoriteListArray });
  };

  removeFavoriteLive = fixtureItem => {
    let favoriteListArray = this.state.favoriteListArray.filter(fixture => {
      return fixtureItem.id !== fixture.id;
    });

    localStorage.setItem(
      "favoriteListArray",
      JSON.stringify(favoriteListArray)
    );

    this.setState({ favoriteListArray: favoriteListArray });
  };

  render() {
    const {
      isLoading,
      fixtureForLeagueData,
      favoriteListArray,
      allLength,
      liveLength
    } = this.state;

    if (isLoading) {
      return (
        <React.Fragment>
          <div className="col-lg-5 text-center">
            <Loading loading={isLoading} />
            <br />
            <FormattedMessage id="loading" defaultMessage="Loading..." />
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <>
          <div className="col-lg-5">
            <div className="row">
              <div className="mb-1 col-lg-8">
                <div className="input-group">
                  <DatePicker
                    className="form-control "
                    locale="locale_datePicker"
                    onChange={this.onChange}
                    value={this.state.today}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-calendar" />{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-1">
                <button
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Click to switch"
                  type="button"
                  className={
                    "btn " +
                    (this.state.checked ? " btn-danger" : " btn-primary")
                  }
                  onClick={this.handleChange}
                >
                  {this.state.checked ? (
                    <div className="d-flex align-items-center">
                      <div
                        className="spinner-grow spinner-grow-sm text-warning"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div>
                        <FormattedMessage
                          id="live.live"
                          defaultMessage="Live Matches"
                        />{" "}
                        ({liveLength})
                      </div>
                    </div>
                  ) : (
                    <div className="d-flex align-items-center">
                      <div>
                        <FormattedMessage
                          id="live.all"
                          defaultMessage="All Matches"
                        />
                      </div>
                      <div className="ml-1">({allLength})</div>
                    </div>
                  )}
                </button>
              </div>
            </div>

            <LiveFavorite
              today={this.state.today}
              lang={this.props.lang}
              liveForFavorite={favoriteListArray}
              removeFavoriteLive={this.removeFavoriteLive}
            />

            {fixtureForLeagueData !== null &&
            fixtureForLeagueData.length > 0 ? (
              <>
                <div className="card card-danger card-outline preoddsBottom">
                  <div className="card-header">
                    <h3 className="card-title text-danger">
                      <FormattedMessage
                        id="navbar.live"
                        defaultMessage="Live Scores"
                      />
                    </h3>
                  </div>
                </div>
                {fixtureForLeagueData.map((fixture, i) => (
                  <div key={"live_" + i}>
                    <div className="card card-default preoddsBottom">
                      <div className="card-header">
                        <div className="card-title">
                          <div className="d-flex align-items-center">
                            <div>
                              <img
                                src={fixture.country.logo}
                                alt="logo"
                                className="img-fluid"
                                style={{ width: "24px" }}
                              />
                            </div>
                            <div className="ml-1">
                              {" "}
                              <span>{fixture.country.name}</span> {" - "}{" "}
                              <span>{fixture.league.name}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {fixture.fixture.map(fixtureItem => (
                      <div
                        key={fixtureItem.id}
                        className="callout callout-info"
                        id="fixtureBg"
                      >
                        <div className="d-flex">
                          <div className="flex-grow-1">
                            <Link
                              style={{
                                textDecoration: "none !important",
                                link: "none",
                                color: "black"
                              }}
                              to={{
                                pathname: "/fixtureDetail",
                                state: {
                                  fixtureId: fixtureItem.id,
                                  lang: this.props.lang,
                                  today: this.state.today
                                }
                              }}
                            >
                              <LiveFixtureItem
                                toastGoal={this.notifyGoal}
                                toastTimeStatus={this.notifyTimeStatus}
                                fixtureItem={fixtureItem}
                                lang={this.props.lang}
                                goalSound={this.props.goalSound}
                              />
                            </Link>
                          </div>

                          {fixtureItem.timeStatus !== "FT" &&
                          fixtureItem.timeStatus !== "FT_PEN" &&
                          fixtureItem.timeStatus !== "AET" ? (
                            favoriteListArray.filter(fixture => {
                              return fixture.id === fixtureItem.id;
                            }).length > 0 ? (
                              <div
                                style={{ cursor: "pointer" }}
                                onClick={this.removeFavoriteLive.bind(
                                  this,
                                  fixtureItem
                                )}
                                className="border-left border-info d-flex justify-content-center align-items-center pl-2"
                              >
                                <div>
                                  <i className="fas fa-star text-warning" />
                                </div>
                              </div>
                            ) : (
                              <div
                                style={{ cursor: "pointer" }}
                                onClick={this.addFavoriteLive.bind(
                                  this,
                                  fixtureItem
                                )}
                                className="d-flex border-left border-info justify-content-center align-items-center pl-2"
                              >
                                <div>
                                  <i className="far fa-star" />
                                </div>
                              </div>
                            )
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </>
            ) : (
              <div className="d-flex justify-content-center">
                <div>
                  <span className="font-weight-bold">
                    <FormattedMessage
                      id="live.nomatches"
                      defaultMessage="No live match."
                    />
                  </span>
                </div>
              </div>
            )}
          </div>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
          />
        </>
      );
    }
  }
}

export default Live;
