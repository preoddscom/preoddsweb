import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
class FixtureItem extends Component {
  render() {
    const { fixtureItem } = this.props;
    return (
      <div className="d-flex">
        <div className="border-right border-info  d-flex p-2">
          <div className="align-self-center font-weight-bold text-danger">
            {fixtureItem.timeStatus === "NS" ||
            fixtureItem.timeStatus === "LIVE" ||
            fixtureItem.timeStatus === "HT" ||
            fixtureItem.timeStatus === "PEN_LIVE" ||
            fixtureItem.timeStatus === "ET" ||
            fixtureItem.timeStatus === "BREAK" ||
            fixtureItem.timeStatus === "Deleted" ||
            fixtureItem.timeStatus === "CANCL" ||
            fixtureItem.timeStatus === "POSTP" ||
            fixtureItem.timeStatus === "INT" ||
            fixtureItem.timeStatus === "ABAN" ||
            fixtureItem.timeStatus === "SUSP" ||
            fixtureItem.timeStatus === "DELAYED" ||
            fixtureItem.timeStatus === "TBA" ||
            fixtureItem.timeStatus === "AWARD" ||
            fixtureItem.timeStatus === "WO" ||
            fixtureItem.timeStatus === "AU" ? (
              fixtureItem.timeStartingAtTime.substring(0, 5)
            ) : fixtureItem.timeStatus === "FT" ||
              fixtureItem.timeStatus === "AET" ||
              fixtureItem.timeStatus === "FT_PEN" ? (
              <FormattedMessage id="detail.FT" defaultMessage="FT" />
            ) : null}
          </div>
        </div>
        <div className=" d-flex flex-column p-2">
          <div className="align-self-start">
            <img
              src={fixtureItem.localTeam.logoPath}
              alt="logo"
              className="img-fluid"
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <div className="align-self-start">
            <img
              src={fixtureItem.visitorTeam.logoPath}
              alt="logo"
              className="img-fluid mt-1"
              style={{ width: "20px", height: "20px" }}
            />{" "}
          </div>
        </div>

        <div className="d-flex flex-column  p-2">
          <div className="text-truncate" style={{ maxWidth: "250px" }}>
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
          <div className="mt-2 text-truncate " style={{ maxWidth: "250px" }}>
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

        <div className=" ml-auto d-flex flex-column p-2 ">
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
                : fixtureItem.ftScore.split("-")[0]
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
                : fixtureItem.ftScore.split("-")[1]
              : null}
          </div>
        </div>
      </div>
    );
  }
}
export default FixtureItem;
