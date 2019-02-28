import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

class TimeStatusLiveItem extends Component {
  render() {
    const { fixtureItem } = this.props;
    return (
      <div className="callout callout-danger preoddsBottom">
        <Link
          style={{
            textDecoration: "none !important",
            link: "none",
            color: "black"
          }}
          to={{
            pathname: "/fixtureDetail",
            state: { fixtureId: fixtureItem.id, lang: this.props.lang }
          }}
        >
          <div className="d-flex">
            <div className="border-right border-info  d-flex flex-column justify-content-center p-2">
              <div className="align-self-center font-weight-bold text-danger">
                <FormattedMessage id="live.start" defaultMessage="Start" />
              </div>
              <div className="align-self-center">
                <img
                  src="/img/preodds/whistle.jpg"
                  alt="logo"
                  style={{ width: "24px", height: "24px" }}
                />
              </div>
            </div>
            <div className=" d-flex flex-column justify-content-center">
              <div className="d-none d-md-block p-1">
                <img
                  src={fixtureItem.localTeam.logoPath}
                  alt="logo"
                  className="img-fluid"
                  style={{ width: "20px", height: "20px" }}
                />
              </div>
              <div className="d-none d-md-block p-1">
                <img
                  src={fixtureItem.visitorTeam.logoPath}
                  alt="logo"
                  className="img-fluid"
                  style={{ width: "20px", height: "20px" }}
                />{" "}
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <div className="p-1">
                <span>{fixtureItem.localTeam.name}</span>
              </div>
              <div className="p-1">
                <span>{fixtureItem.visitorTeam.name}</span>
              </div>
            </div>
            <div className=" ml-auto d-flex flex-column p-2 ">
              <div className="mt-1">{fixtureItem.localTeamScore}</div>
              <div className="mt-2">{fixtureItem.visitorTeamScore}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default TimeStatusLiveItem;
