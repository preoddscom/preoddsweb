import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export default class GoalLiveItem extends Component {
  render() {
    const { fixtureItem, score, lang, today } = this.props;
    return (
      <div className="callout callout-info preoddsBottom">
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
              lang,
              today
            }
          }}
        >
          <div className="d-flex">
            <div className="border-right border-info  d-flex flex-column justify-content-center p-2">
              <div className="align-self-center font-weight-bold">
                {fixtureItem.timeStatus === "NS" ? (
                  fixtureItem.timeStartingAtTime.substring(0, 5)
                ) : fixtureItem.timeStatus === "LIVE" ? (
                  fixtureItem.timeInjuryTime > 0 ? (
                    ""
                      .concat(fixtureItem.timeMinute)
                      .concat("' + ")
                      .concat(fixtureItem.timeInjuryTime)
                      .concat("'")
                  ) : (
                    <span className="text-danger">
                      {fixtureItem.timeMinute}
                      <span className="font-weight-bold">'</span>
                    </span>
                  )
                ) : fixtureItem.timeStatus === "HT" ? (
                  <span className="text-danger">
                    <FormattedMessage id="detail.HT" defaultMessage="HT" />
                  </span>
                ) : fixtureItem.timeStatus === "FT" ? (
                  <FormattedMessage id="detail.FT" defaultMessage="FT" />
                ) : fixtureItem.timeStatus === "ET" ? (
                  <span>
                    {fixtureItem.timeMinute}
                    <span className="">'</span>
                  </span>
                ) : fixtureItem.timeStatus === "AET" ? (
                  <FormattedMessage id="detail.ET" defaultMessage="ET" />
                ) : fixtureItem.timeStatus === "PEN_LIVE" ? (
                  <span className="text-danger">
                    <FormattedMessage
                      id="detail.PEN_LIVE"
                      defaultMessage="Pen Live"
                    />
                  </span>
                ) : fixtureItem.timeStatus === "FT_PEN" ? (
                  <FormattedMessage id="detail.PEN" defaultMessage="Pen" />
                ) : fixtureItem.timeStatus === "BREAK" ? (
                  <FormattedMessage id="detail.FT" defaultMessage="FT" />
                ) : fixtureItem.timeStatus === "Deleted" ||
                  fixtureItem.timeStatus === "CANCL" ? (
                  <FormattedMessage id="detail.CANC" defaultMessage="Cancel" />
                ) : fixtureItem.timeStatus === "POSTP" ||
                  fixtureItem.timeStatus === "INT" ||
                  fixtureItem.timeStatus === "ABAN" ||
                  fixtureItem.timeStatus === "SUSP" ||
                  fixtureItem.timeStatus === "DELAYED" ||
                  fixtureItem.timeStatus === "TBA" ? (
                  <FormattedMessage id="detail.POSTP" defaultMessage="Postp" />
                ) : fixtureItem.timeStatus === "AWARD" ||
                  fixtureItem.timeStatus === "WO" ? (
                  <FormattedMessage id="detail.AWARD" defaultMessage="Award" />
                ) : fixtureItem.timeStatus === "AU" ? (
                  fixtureItem.timeStartingAtTime.substring(0, 5)
                ) : null}
              </div>

              {score === 1 || score === 2 ? (
                <div className="align-self-center">
                  <i className="fas fa-futbol blink" />
                </div>
              ) : null}
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
                <span
                  className={
                    fixtureItem.localTeamScore > fixtureItem.visitorTeamScore
                      ? "font-weight-bold " + (score === 1 ? " blink" : "")
                      : score === 1
                      ? " blink"
                      : ""
                  }
                >
                  {fixtureItem.localTeam.name}
                </span>
              </div>
              <div className="p-1">
                <span
                  className={
                    fixtureItem.visitorTeamScore > fixtureItem.localTeamScore
                      ? "font-weight-bold " + (score === 2 ? " blink" : "")
                      : score === 2
                      ? " blink"
                      : ""
                  }
                >
                  {fixtureItem.visitorTeam.name}
                </span>
              </div>
            </div>
            <div className=" ml-auto d-flex flex-column p-2 ">
              <div className="mt-1">
                {fixtureItem.timeStatus === "LIVE" ||
                fixtureItem.timeStatus === "HT" ||
                fixtureItem.timeStatus === "FT" ||
                fixtureItem.timeStatus === "BREAK" ||
                fixtureItem.timeStatus === "ET" ||
                fixtureItem.timeStatus === "AET" ||
                fixtureItem.timeStatus === "PEN_LIVE" ||
                fixtureItem.timeStatus === "FT_PEN" ? (
                  fixtureItem.timeStatus === "LIVE" ||
                  fixtureItem.timeStatus === "HT" ? (
                    <span
                      className={"text-danger " + (score === 1 ? " blink" : "")}
                      style={{
                        fontWeight:
                          fixtureItem.visitorTeamScore <
                          fixtureItem.localTeamScore
                            ? "bold"
                            : "normal"
                      }}
                    >
                      <span>{fixtureItem.localTeamScore}</span>
                    </span>
                  ) : (
                    <span
                      style={{
                        fontWeight:
                          fixtureItem.visitorTeamScore <
                          fixtureItem.localTeamScore
                            ? "bold"
                            : "normal"
                      }}
                    >
                      {fixtureItem.localTeamScore}
                    </span>
                  )
                ) : null}
              </div>
              <div className="mt-2">
                {fixtureItem.timeStatus === "LIVE" ||
                fixtureItem.timeStatus === "HT" ||
                fixtureItem.timeStatus === "FT" ||
                fixtureItem.timeStatus === "BREAK" ||
                fixtureItem.timeStatus === "ET" ||
                fixtureItem.timeStatus === "AET" ||
                fixtureItem.timeStatus === "PEN_LIVE" ||
                fixtureItem.timeStatus === "FT_PEN" ? (
                  fixtureItem.timeStatus === "LIVE" ||
                  fixtureItem.timeStatus === "HT" ? (
                    <span
                      className={"text-danger " + (score === 2 ? " blink" : "")}
                      style={{
                        fontWeight:
                          fixtureItem.visitorTeamScore >
                          fixtureItem.localTeamScore
                            ? "bold"
                            : "normal"
                      }}
                    >
                      <span>{fixtureItem.visitorTeamScore}</span>
                    </span>
                  ) : (
                    <span
                      style={{
                        fontWeight:
                          fixtureItem.visitorTeamScore >
                          fixtureItem.localTeamScore
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
        </Link>
      </div>
    );
  }
}
