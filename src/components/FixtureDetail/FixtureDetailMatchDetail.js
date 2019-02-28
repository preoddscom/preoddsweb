import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import moment from "moment";
class FixtureDetailMatchDetail extends Component {
  state = {
    isLoading: null,
    fixtureDetail: null
  };

  componentDidMount() {
    const { fixtureDetail } = this.props;
    this.setState({ fixtureDetail });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ fixtureDetail: nextProps.fixtureDetail });
  }

  render() {
    const { fixtureDetail } = this.state;

    let tvs = "";
    return fixtureDetail ? (
      <div className="d-none d-md-block">
        <div className="mt-2 text-center bg-secondary d-block py-1">
          <h3 className="card-title">
            <FormattedMessage
              id="detail.matchinfo"
              defaultMessage="Match Info"
            />
          </h3>
        </div>

        <ul className="list-group ">
          <li className="list-group-item p-1 border-0 border-bottom ">
            <span className="font-weight-bold ">
              <FormattedMessage id="match.country" defaultMessage="Country" />
            </span>
            <span className="float-right">
              {fixtureDetail && fixtureDetail.country
                ? fixtureDetail.country.name
                : null}
            </span>
          </li>
          <li className="list-group-item p-1 border-0">
            <span className="font-weight-bold">
              <FormattedMessage id="match.season" defaultMessage="Season" />
            </span>
            <span className="float-right">
              {fixtureDetail && fixtureDetail.season ? (
                <div>
                  {fixtureDetail.season.name}{" "}
                  <FormattedMessage id="match.round" defaultMessage="Round" />{" "}
                  {fixtureDetail &&
                  fixtureDetail.round &&
                  fixtureDetail.round.name
                    ? fixtureDetail.round.name
                    : null}
                </div>
              ) : null}
            </span>
          </li>
          <li className="list-group-item p-1 border-0">
            <span className="font-weight-bold">
              {" "}
              <FormattedMessage id="match.league" defaultMessage="League" />
            </span>
            <span className="float-right">
              {fixtureDetail && fixtureDetail.league ? (
                <div>
                  <img
                    src={fixtureDetail.league.logo}
                    style={{ width: "24px" }}
                    alt="logo"
                  />{" "}
                  {fixtureDetail.league.name}
                </div>
              ) : null}
            </span>
          </li>
          <li className="list-group-item p-1 border-0">
            <span className="font-weight-bold">
              <FormattedMessage id="match.venue" defaultMessage="Venue" />
            </span>
            <span className="float-right">
              {fixtureDetail && fixtureDetail.venue
                ? fixtureDetail.venue.name
                : null}
            </span>
          </li>
          <li className="list-group-item p-1 border-0">
            <span className="font-weight-bold">
              <FormattedMessage id="match.pitch" defaultMessage="Pitch" />
            </span>
            <span className="float-right">
              {fixtureDetail && fixtureDetail.pitch ? (
                <span className="text-capitalize">{fixtureDetail.pitch}</span>
              ) : null}
            </span>
          </li>
          <li className="list-group-item p-1 border-0">
            <span className="font-weight-bold">
              {" "}
              <FormattedMessage
                id="match.attendance"
                defaultMessage="Attendance"
              />
            </span>
            <span className="float-right">
              {fixtureDetail && fixtureDetail.attendance
                ? fixtureDetail.attendance
                : null}
            </span>
          </li>
          <li className="list-group-item p-1 border-0">
            <span className="font-weight-bold">
              {" "}
              <FormattedMessage id="match.referee" defaultMessage="Referee" />
            </span>
            <span className="float-right">
              {" "}
              {fixtureDetail && fixtureDetail.referee ? (
                <span>{fixtureDetail.referee.fullName}</span>
              ) : null}
            </span>
          </li>
          <li className="list-group-item p-1 border-0">
            <span className="font-weight-bold">
              {" "}
              <FormattedMessage id="match.date" defaultMessage="Date" />
            </span>
            <span className="float-right">
              {fixtureDetail && fixtureDetail.timeStartingAtDate ? (
                <div>
                  <i className="fas fa-calendar" />{" "}
                  {moment(fixtureDetail.timeStartingAtDate).format(
                    "DD.MM.YYYY"
                  )}
                </div>
              ) : null}
            </span>
          </li>
          <li className="list-group-item p-1 border-0">
            <span className="font-weight-bold">
              <FormattedMessage id="match.time" defaultMessage="Time" />
            </span>
            <span className="float-right">
              {fixtureDetail && fixtureDetail.timeStartingAtTime ? (
                <div>
                  <i className="fas fa-clock" />{" "}
                  {fixtureDetail.timeStartingAtTime.substring(0, 5)} {}
                </div>
              ) : null}
            </span>
          </li>
          <li className="list-group-item p-1 border-0 bg-light">
            <span className="font-weight-bold">
              <FormattedMessage id="match.tv" defaultMessage="Tv" />
            </span>
            <span className="text-wrap float-right">
              {fixtureDetail && fixtureDetail.tvstation ? (
                <div className="d-flex flex-row justify-content-start">
                  {fixtureDetail.tvstation.forEach(tv => {
                    tvs = tvs.concat(tv.name + ", ");
                  })}
                  {tvs}
                </div>
              ) : null}
            </span>
          </li>
        </ul>
      </div>
    ) : null;
  }
}
export default FixtureDetailMatchDetail;
