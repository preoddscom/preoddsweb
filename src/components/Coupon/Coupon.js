import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import Loading from "../Loading/Loading";
import axios from "axios";
import moment from "moment";
import * as Util from "../settings/Util";

class Coupon extends Component {
  state = {
    isLoading: true,
    coupons: []
  };

  componentDidMount() {
    this.mount = false;
    this.fetchCoupons(this.props.dateToday);
  }

  componentWillUnmount() {
    this.mount = false;
  }

  componentWillReceiveProps(nextProps) {
    this.fetchCoupons(nextProps.dateToday);
  }

  async fetchCoupons(dateToday) {
    this.mount = true;
    try {
      const res = await axios.get(
        `${Util.API_URL}coupon/date=${dateToday}&lang=${
          this.props.lang
        }&timeZone=${Util.API_TIMEZONE}&apiKey=${Util.API_KEY}`,
        {
          headers: { "Access-Control-Allow-Origin": "*" }
        }
      );
      if (this.mount) {
        this.setState({
          isLoading: false,
          coupons: res.data
        });
      }
    } catch (e) {
      this.setState({
        coupons: null,
        isLoading: false
      });
    }
  }

  render() {
    const { isLoading, coupons } = this.state;

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
          {coupons && coupons.length > 0
            ? coupons.map(coupon => {
                return (
                  <div
                    key={coupon.id}
                    className={
                      "card card-outline d-none d-lg-block " +
                      (coupon.isWin === 0
                        ? "card-danger"
                        : coupon.isWin === 1
                        ? "card-success"
                        : "card-secondary")
                    }
                  >
                    <div className="card-header">
                      <h3 className="card-title d-flex align-items-center">
                        <div>
                          <img
                            src={coupon.userLogo}
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
                            #{coupon.id}
                          </span>
                        </div>
                        <div className="ml-auto">
                          <span
                            className={
                              "float-right " +
                              (coupon.isWin === 0
                                ? "text-danger"
                                : coupon.isWin === 1
                                ? "text-success"
                                : null)
                            }
                          >
                            {coupon.totalRate}
                          </span>
                        </div>
                      </h3>
                    </div>
                    <div className="card-body p-0">
                      <ul className="list-group">
                        {coupon &&
                        coupon.couponItem &&
                        coupon.couponItem.length > 0
                          ? coupon.couponItem.map((item, index) => {
                              return (
                                <li className="list-group-item" key={index}>
                                  <div className="d-flex truncateMain">
                                    <div className="d-flex flex-column justify-content-center  border-info border-right pr-2">
                                      <div className="align-self-center">
                                        {moment(item.timeStartingAtDate).format(
                                          "DD.MM.YYYY"
                                        )}
                                      </div>
                                      <div className="align-self-center font-weight-bold">
                                        {item.timeStartingAtTime.substring(
                                          0,
                                          5
                                        )}
                                      </div>
                                    </div>

                                    <div className="d-flex justify-content-center flex-grow-1 flex-column ml-1 ">
                                      <div className="truncateText">
                                        <span>{item.localTeamName}</span>
                                      </div>
                                      <div className="truncateText">
                                        <span>{item.visitorTeamName}</span>
                                      </div>
                                    </div>

                                    <div className="d-flex flex-column justify-content-center align-items-center ">
                                      <div>
                                        <span>{item.marketName}</span>
                                      </div>

                                      <div>
                                        <span>{item.oddLabel}</span>
                                      </div>

                                      <div className="font-weight-bold text-info">
                                        {item.oddValue}
                                      </div>
                                    </div>

                                    <div className="align-self-center justify-content-center pl-2">
                                      <i
                                        className={
                                          "fas fa-lg " +
                                          (item.oddWinning === 0
                                            ? "fa-times text-danger"
                                            : item.oddWinning === 1
                                            ? "fa-check text-success"
                                            : "fa-question")
                                        }
                                      />
                                    </div>
                                  </div>
                                </li>
                              );
                            })
                          : null}
                      </ul>
                    </div>
                  </div>
                );
              })
            : null}
        </React.Fragment>
      );
    }
  }
}

export default Coupon;
