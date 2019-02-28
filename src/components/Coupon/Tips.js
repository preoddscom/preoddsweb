import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import Loading from "../Loading/Loading";
import axios from "axios";
import moment from "moment";
import * as Util from "../settings/Util";

class Tips extends Component {
  state = {
    isLoading: true,
    page: 0,
    isLastPage: false,
    spinner: false,
    tips: []
  };

  componentDidMount() {
    this.mount = false;
    this.fetchCoupons(this.state.page);
  }

  componentWillUnmount() {
    this.mount = false;
  }

  componentWillReceiveProps(nextProps) {
    this.fetchCoupons(this.state.page);
  }

  async fetchCoupons(page) {
    this.mount = true;
    try {
      const res = await axios.get(
        `${Util.API_URL}tips&page=${page}&lang=${this.props.lang}&timeZone=${
          Util.API_TIMEZONE
        }&apiKey=${Util.API_KEY}`,
        {
          headers: { "Access-Control-Allow-Origin": "*" }
        }
      );
      if (this.mount) {
        let tipsNew = res.data.tips.map(tip => ({
          ...tip
        }));

        let tipsArray = [...this.state.tips, ...tipsNew];

        this.setState(prevState => ({
          isLoading: false,
          tips: page === 0 ? tipsNew : tipsArray,
          isLastPage: res.data.isLastPage,
          page: res.data.page,
          spinner: false
        }));
      }
    } catch (e) {
      this.setState({
        tips: null,
        isLoading: false
      });
    }
  }

  onLoadMore = () => {
    if (!this.state.isLastPage) {
      this.setState({ page: this.state.page + 1, spinner: true }, () => {
        this.fetchCoupons(this.state.page);
      });
    }
  };

  render() {
    const { isLoading, tips, isLastPage, spinner } = this.state;

    if (isLoading) {
      return (
        <React.Fragment>
          <div className="col-lg-8 text-center text-lg-left">
            <Loading loading={isLoading} />
            <br />
            <FormattedMessage id="loading" defaultMessage="Loading" />
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {tips && tips.length > 0
            ? tips.map(tip => {
                return (
                  <div
                    key={tip.id}
                    className={
                      "card card-outline d-none d-lg-block " +
                      (tip.isWin === 0
                        ? "card-danger"
                        : tip.isWin === 1
                        ? "card-success"
                        : "card-secondary")
                    }
                  >
                    <div className="card-header">
                      <h3 className="card-title d-flex align-items-center">
                        <div>
                          <img
                            src={tip.userLogo}
                            alt="logo"
                            className="rounded img-fluid"
                            style={{ width: "24px", height: "24px" }}
                          />
                        </div>
                        <div className="ml-1">
                          <span className="font-weight-normal">
                            {" "}
                            <FormattedMessage
                              id="coupon.coupon"
                              defaultMessage="Coupon"
                            />{" "}
                            #{tip.id}
                          </span>
                        </div>
                        <div className="ml-auto d-flex align-items-center">
                          <div>
                            <img
                              src={tip.countryLogo}
                              style={{ width: "24px", height: "24px" }}
                              alt="logo"
                            />
                          </div>
                          <div className="ml-1" style={{ fontSize: "12px" }}>
                            <span>
                              {tip.countryName} {" - "}
                            </span>
                          </div>
                          {/*  <div>
                            <img
                              src={coupon.leagueLogo}
                              style={{ width: "24px", height: "24px" }}
                              alt=""
                            />
                          </div> */}
                          <div style={{ fontSize: "12px" }}>
                            <span className="font-weight-bold ml-1">
                              {tip.leagueName}
                            </span>{" "}
                          </div>
                        </div>
                      </h3>
                    </div>
                    <div className="card-body p-0">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <div className="d-flex truncateMain">
                            <div className="d-flex flex-column justify-content-center  border-info border-right pr-2">
                              <div className="align-self-center">
                                {moment(tip.timeStartingAtDateTime).format(
                                  "DD.MM.YYYY"
                                )}
                              </div>
                              <div className="align-self-center font-weight-bold">
                                {moment(tip.timeStartingAtDateTime).format(
                                  "HH.mm"
                                )}
                              </div>
                            </div>

                            <div className="d-flex justify-content-center flex-grow-1 flex-column ml-1 ">
                              <div className="truncateText">
                                <span>{tip.localTeamName}</span>
                              </div>
                              <div className="truncateText">
                                <span>{tip.visitorTeamName}</span>
                              </div>
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-center text-danger font-weight-bold ">
                              <div className="mr-5">
                                {tip.timeStatus === "FT" ||
                                tip.timeStatus === "AET" ||
                                tip.timeStatus === "FT_PEN"
                                  ? tip.localTeamScore
                                  : null}
                              </div>
                              <div className="mr-5">
                                {tip.timeStatus === "FT" ||
                                tip.timeStatus === "AET" ||
                                tip.timeStatus === "FT_PEN"
                                  ? tip.visitorTeamScore
                                  : null}
                              </div>
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-center ">
                              <div>
                                <span>{tip.marketName}</span>
                              </div>

                              <div>
                                <span>{tip.oddLabel}</span>
                              </div>
                              <div>
                                {tip.oddTotal ? tip.oddTotal : tip.oddHandicap}
                              </div>

                              <div className="font-weight-bold text-info">
                                {tip.oddValue}
                              </div>
                            </div>

                            <div className="align-self-center justify-content-center pl-2">
                              <i
                                className={
                                  "fas fa-lg " +
                                  (tip.isWin === 0
                                    ? "fa-times text-danger"
                                    : tip.isWin === 1
                                    ? "fa-check text-success"
                                    : "fa-question")
                                }
                              />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })
            : null}

          {!isLastPage ? (
            <div className="row justify-content-center">
              <button
                className="btn btn-secondary mt-2"
                disabled={spinner ? true : false}
                type="button"
                onClick={this.onLoadMore}
              >
                <span
                  className={spinner ? "spinner-border spinner-border-sm" : ""}
                  role="status"
                  aria-hidden="true"
                />{" "}
                {spinner ? (
                  <FormattedMessage id="loading" defaultMessage="Loading..." />
                ) : (
                  <FormattedMessage
                    id="oddItem.loadMore"
                    defaultMessage="Load More"
                  />
                )}
              </button>
            </div>
          ) : null}
        </React.Fragment>
      );
    }
  }
}

export default Tips;
