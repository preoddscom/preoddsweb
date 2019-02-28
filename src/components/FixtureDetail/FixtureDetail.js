import React, { Component } from "react";
import Loading from "../Loading/Loading";
import moment from "moment";
import { FormattedMessage } from "react-intl";
import * as Util from "../settings/Util";
import FixtureDetailResult from "./FixtureDetailResult";
import FixtureDetailEvent from "./FixtureDetailEvent";
import FixtureDetailCorner from "./FixtureDetailCorner";
import FixtureDetailMatchDetail from "./FixtureDetailMatchDetail";
import FixtureDetailMatchWeather from "./FixtureDetailMatchWeather";
import FixtureDetailStats from "./FixtureDetailStats";
import Head2Head from "./Head2Head";
import FixtureDetailForm5 from "./FixtureDetailForm5";
import StandingDetail from "../Standing/StandingDetail";
import FixtureDetailAnalysis from "./FixtureDetailAnalysis";
import FixtureDetailStatsAnalysis from "./FixtureDetailStatsAnalysis";
import Lineup from "./Lineup";

class FixtureDetail extends Component {
  state = {
    fixtureDetail: null,
    isLoading: true
  };

  startInterval = () => {
    this.interval = setInterval(
      () => this.fetchFixtureDetail(this.props.location.state.fixtureId),
      10000
    );
  };

  stopInterval = () => {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  };

  componentWillUnmount() {
    this.stopInterval();
    this.mount = false;
  }

  componentDidMount() {
    this.mount = false;
    this.setState({ isLoading: true });
    const { fixtureId } = this.props.location.state;
    this.fetchFixtureDetail(fixtureId);
  }

  fetchFixtureDetail(fixtureId) {
    this.mount = true;
    fetch(
      `${Util.API_URL}fixture/${fixtureId}&lang=${
        this.props.location.state.lang
      }&timeZone=${Util.API_TIMEZONE}&apiKey=${Util.API_KEY}`,
      {
        headers: { "Access-Control-Allow-Origin": "*" }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (this.mount) {
          this.setState({ fixtureDetail: data, isLoading: false }, () => {
            if (
              !this.interval &&
              moment(new Date()).format("YYYY-MM-DD") ===
                moment(this.props.location.state.today).format("YYYY-MM-DD")
            ) {
              this.startInterval();
            }
          });
        }
      });
  }

  render() {
    const { isLoading, fixtureDetail } = this.state;
    if (isLoading) {
      return (
        <div className="text-center">
          <Loading loading={isLoading} />
          <br />
          <FormattedMessage id="loading" defaultMessage="Loading" />
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="card shadow-sm">
            <img
              src="/img/bg/detail.jpg"
              height="150"
              className="card-img"
              alt="..."
            />

            <div className="card-img-overlay ">
              <div className="d-flex justify-content-center ">
                <div className="d-flex flex-column align-items-center ">
                  <div>
                    <img
                      src={
                        fixtureDetail.localTeam.logoPath
                          ? fixtureDetail.localTeam.logoPath
                          : null
                      }
                      width="65"
                      height="65"
                      alt="teamlogo"
                    />
                  </div>
                  <div>
                    <span
                      className="d-inline-block text-truncate"
                      style={{
                        maxWidth: "150px",
                        fontSize: "16px",
                        color: "white"
                      }}
                    >
                      {fixtureDetail.localTeam
                        ? fixtureDetail.localTeam.name
                          ? fixtureDetail.localTeam.name
                          : null
                        : null}
                    </span>
                  </div>

                  <div className="d-none d-md-block">
                    <FixtureDetailForm5
                      formDetail={fixtureDetail.localTeamForm}
                    />
                  </div>
                </div>

                <FixtureDetailResult fixtureDetail={fixtureDetail} />

                <div className="d-flex flex-column align-items-center">
                  <div>
                    <img
                      src={
                        fixtureDetail.visitorTeam.logoPath
                          ? fixtureDetail.visitorTeam.logoPath
                          : null
                      }
                      width="65"
                      height="65"
                      alt="teamlogo"
                    />
                  </div>
                  <div>
                    <span
                      className="d-inline-block text-truncate"
                      style={{
                        maxWidth: "150px",
                        fontSize: "16px",
                        color: "white"
                      }}
                    >
                      {fixtureDetail.visitorTeam
                        ? fixtureDetail.visitorTeam.name
                          ? fixtureDetail.visitorTeam.name
                          : null
                        : null}
                    </span>
                  </div>
                  <div className="d-none d-md-block">
                    <FixtureDetailForm5
                      formDetail={fixtureDetail.visitorTeamForm}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body" style={{ fontSize: "13px" }}>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header d-flex p-0">
                      <h3 className="card-title p-3">
                        <FormattedMessage
                          id="detail.match"
                          defaultMessage="Match"
                        />
                      </h3>
                      <ul className="nav nav-pills ml-auto p-2">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#detail"
                            data-toggle="tab"
                          >
                            <FormattedMessage
                              id="detail.detail"
                              defaultMessage="Detail"
                            />
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="#lineup"
                            data-toggle="tab"
                          >
                            <FormattedMessage
                              id="detail.lineup"
                              defaultMessage="Lineup"
                            />
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#analysis"
                            data-toggle="tab"
                          >
                            <FormattedMessage
                              id="detail.analysis"
                              defaultMessage="Analysis"
                            />
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#standing"
                            data-toggle="tab"
                          >
                            <FormattedMessage
                              id="detail.standing"
                              defaultMessage="Standing"
                            />
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="#statsAnalysis"
                            data-toggle="tab"
                          >
                            <FormattedMessage
                              id="detail.statsanalysis"
                              defaultMessage="Stats Analysis"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <div className="tab-content">
                        <div className="tab-pane active" id="detail">
                          <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-5 mr-3">
                              <FixtureDetailEvent
                                fixtureDetail={fixtureDetail}
                              />

                              <FixtureDetailCorner
                                fixtureDetail={fixtureDetail}
                              />

                              <FixtureDetailMatchDetail
                                fixtureDetail={fixtureDetail}
                              />

                              <FixtureDetailMatchWeather
                                fixtureDetail={fixtureDetail}
                              />

                              {/*  <LineUpDetail fixtureDetail={fixtureDetail} /> */}
                            </div>

                            <div className="col-lg-5">
                              <FixtureDetailStats
                                fixtureDetail={fixtureDetail}
                              />
                            </div>
                            <div className="col-lg-1" />
                          </div>
                        </div>

                        <div className="tab-pane" id="lineup">
                          <Lineup fixtureDetail={fixtureDetail} />
                        </div>

                        <div className="tab-pane" id="analysis">
                          <FixtureDetailAnalysis
                            lang={this.props.location.state.lang}
                            fixtureId={fixtureDetail.id}
                          />
                        </div>

                        <div className="tab-pane" id="standing">
                          <div className="row">
                            <div className="col-lg-6">
                              <StandingDetail
                                standings={fixtureDetail.standing}
                              />
                            </div>
                            <div className="col-lg-6">
                              <Head2Head fixtureDetail={fixtureDetail} />
                            </div>
                          </div>
                        </div>

                        <div className="tab-pane" id="statsAnalysis">
                          <div className="row justify-content-lg-center">
                            <div className="col-lg-6">
                              <FixtureDetailStatsAnalysis
                                fixtureDetail={fixtureDetail}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default FixtureDetail;
