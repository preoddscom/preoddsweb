import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
class FixtureItem extends Component {
  render() {
    const { fixtureItem } = this.props;
    return (
      <div className="d-flex">
        <div className="border-right  d-flex p-2">
          <div className="align-self-center font-weight-bold text-danger">
            {fixtureItem.timeStatus === "FT" ||
            fixtureItem.timeStatus === "AET" ||
            fixtureItem.timeStatus === "FT_PEN" ? (
              <FormattedMessage id="detail.FT" defaultMessage="FT" />
            ) : (
              fixtureItem.timeStartingAtTime.substring(0, 5)
            )}
          </div>
        </div>
        <div className=" d-flex flex-column justify-content-center">
          <div className="p-1">
            <img
              src={fixtureItem.localTeam.logoPath}
              alt="logo"
              className="img-fluid"
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <div className="p-1">
            <img
              src={fixtureItem.visitorTeam.logoPath}
              alt="logo"
              className="img-fluid mt-1"
              style={{ width: "20px", height: "20px" }}
            />{" "}
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center">
          <div className="text-truncate p-1" style={{ maxWidth: "250px" }}>
            <span
              className={
                fixtureItem.localTeamScore > fixtureItem.visitorTeamScore
                  ? "font-weight-bold"
                  : null
              }
            >
              {fixtureItem.localTeam.name}
            </span>
          </div>
          <div className="text-truncate p-1" style={{ maxWidth: "250px" }}>
            <span
              className={
                fixtureItem.visitorTeamScore > fixtureItem.localTeamScore
                  ? "font-weight-bold"
                  : null
              }
            >
              {fixtureItem.visitorTeam.name}
            </span>
          </div>
        </div>

        <div className=" ml-auto d-flex flex-column p-2">
          <div
            className={
              fixtureItem.localTeamScore > fixtureItem.visitorTeamScore
                ? "font-weight-bold mt-1"
                : "mt-1"
            }
          >
            {fixtureItem.timeStatus === "FT" ||
            fixtureItem.timeStatus === "AET" ||
            fixtureItem.timeStatus === "FT_PEN"
              ? fixtureItem.etScore
                ? fixtureItem.etScore.split("-")[0]
                : fixtureItem.localTeamScore
              : null}
          </div>
          <div
            className={
              fixtureItem.localTeamScore < fixtureItem.visitorTeamScore
                ? "font-weight-bold mt-2"
                : "mt-2"
            }
          >
            {fixtureItem.timeStatus === "FT" ||
            fixtureItem.timeStatus === "AET" ||
            fixtureItem.timeStatus === "FT_PEN"
              ? fixtureItem.etScore
                ? fixtureItem.etScore.split("-")[1]
                : fixtureItem.visitorTeamScore
              : null}
          </div>
        </div>
      </div>
    );
  }
}
export default FixtureItem;
