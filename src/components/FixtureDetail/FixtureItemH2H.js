import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
class FixtureItemH2H extends Component {
  render() {
    const { fixtureItem } = this.props;
    return (
      <div className="d-flex callout callout-info preoddsBottom">
        <div className="border-right  d-flex flex-column justify-content-center  p-2">
          <div>
            {fixtureItem.timeStatus === "FT" ||
            fixtureItem.timeStatus === "AET" ||
            fixtureItem.timeStatus === "FT_PEN" ? (
              <FormattedMessage id="detail.FT" defaultMessage="FT" />
            ) : (
              fixtureItem.timeStartingAtTime.substring(0, 5)
            )}
          </div>
        </div>
        <div className=" d-flex flex-column p-2">
          <div className="align-self-start">
            <img
              src={fixtureItem.localTeam.logoPath}
              alt="logo"
              className="img-fluid"
              style={{ width: "24px", height: "24px" }}
            />
          </div>
          <div className="align-self-start">
            <img
              src={fixtureItem.visitorTeam.logoPath}
              alt="logo"
              className="img-fluid mt-1"
              style={{ width: "24px", height: "24px" }}
            />{" "}
          </div>
        </div>

        <div className="d-flex flex-column p-2">
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
          <div className="mt-2 text-truncate" style={{ maxWidth: "250px" }}>
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
          <div className="font-weight-bold mt-1">
            {fixtureItem.timeStatus === "FT" ||
            fixtureItem.timeStatus === "AET" ||
            fixtureItem.timeStatus === "FT_PEN" ? (
              fixtureItem.etScore ? (
                <span
                  style={{
                    fontWeight:
                      fixtureItem.visitorTeamScore < fixtureItem.localTeamScore
                        ? "bold"
                        : "normal"
                  }}
                >
                  {fixtureItem.etScore.split("-")[0]}
                </span>
              ) : (
                <span
                  style={{
                    fontWeight:
                      fixtureItem.visitorTeamScore < fixtureItem.localTeamScore
                        ? "bold"
                        : "normal"
                  }}
                >
                  {fixtureItem.localTeamScore}
                </span>
              )
            ) : null}
          </div>
          <div className="mt-2 font-weight-bold">
            {fixtureItem.timeStatus === "FT" ||
            fixtureItem.timeStatus === "AET" ||
            fixtureItem.timeStatus === "FT_PEN" ? (
              fixtureItem.etScore ? (
                <span
                  style={{
                    fontWeight:
                      fixtureItem.visitorTeamScore < fixtureItem.localTeamScore
                        ? "bold"
                        : "normal"
                  }}
                >
                  {fixtureItem.etScore.split("-")[1]}
                </span>
              ) : (
                <span
                  style={{
                    fontWeight:
                      fixtureItem.visitorTeamScore > fixtureItem.localTeamScore
                        ? "bold"
                        : "normal"
                  }}
                >
                  {fixtureItem.visitorTeamScore}
                </span>
              )
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
export default FixtureItemH2H;
