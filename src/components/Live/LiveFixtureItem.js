import React, { Component } from "react";
import moment from "moment";
import { FormattedMessage } from "react-intl";
import ReactAudioPlayer from "react-audio-player";
class FixtureItem extends Component {
  notifyGoal = (fixtureItem, score) => this.props.toastGoal(fixtureItem, score);
  notifyTimeStatus = fixtureItem => this.props.toastTimeStatus(fixtureItem);

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.fixtureItem.localTeamScore !==
        nextProps.fixtureItem.localTeamScore ||
      this.props.fixtureItem.visitorTeamScore !==
        nextProps.fixtureItem.visitorTeamScore ||
      this.props.fixtureItem.timeMinute !== nextProps.fixtureItem.timeMinute ||
      this.props.fixtureItem.timeInjuryTime !==
        nextProps.fixtureItem.timeInjuryTime ||
      this.props.fixtureItem.timeStatus !== nextProps.fixtureItem.timeStatus ||
      this.props.fixtureItem.timeStartingAtTime !==
        nextProps.fixtureItem.timeStartingAtTime
    ) {
      /** Check local team goal */
      if (
        this.props.fixtureItem.localTeamScore !==
        nextProps.fixtureItem.localTeamScore
      ) {
        this.goalLocalChange = true;
        if (nextProps.fixtureItem.isFavorite === undefined)
          this.notifyGoal(nextProps.fixtureItem, 1);
      } else {
        this.goalLocalChange = false;
      }

      /** Check visitor team goal */
      if (
        this.props.fixtureItem.visitorTeamScore !==
        nextProps.fixtureItem.visitorTeamScore
      ) {
        this.goalVisitorChange = true;
        if (nextProps.fixtureItem.isFavorite === undefined)
          this.notifyGoal(nextProps.fixtureItem, 2);
      } else {
        this.goalVisitorChange = false;
      }

      /* Check time status FT, FT_PEN, AET*/
      if (
        this.props.fixtureItem.timeStatus !==
          nextProps.fixtureItem.timeStatus &&
        nextProps.fixtureItem.isFavorite === undefined &&
        (nextProps.fixtureItem.timeStatus === "FT" ||
          nextProps.fixtureItem.timeStatus === "FT_PEN" ||
          nextProps.fixtureItem.timeStatus === "AET" ||
          nextProps.fixtureItem.timeStatus === "HT")
      ) {
        this.notifyTimeStatus(nextProps.fixtureItem);
      }

      return true;
    } else {
      this.goalLocalChange = false;
      this.goalVisitorChange = false;
      return false;
    }
  }

  render() {
    const { fixtureItem } = this.props;
    return (
      <>
        <div className="d-flex">
          <div className="border-right border-info  d-flex flex-column  p-2">
            <div className="align-self-center">
              {moment(fixtureItem.timeStartingAtDate).format("DD.MM.YYYY")}
            </div>
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
                    <span className="blink font-weight-bold">'</span>
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
                  <span className="blink">'</span>
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
            {this.goalLocalChange || this.goalVisitorChange ? (
              <div className="align-self-center" id="hideIt">
                <i className="fas fa-futbol blinkGoal" />
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
                    ? "font-weight-bold " +
                      (this.goalLocalChange ? " blinkGoal" : "")
                    : this.goalLocalChange
                    ? " blinkGoal"
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
                    ? "font-weight-bold " +
                      (this.goalVisitorChange ? " blinkGoal" : "")
                    : this.goalVisitorChange
                    ? " blinkGoal"
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
                    className={
                      "text-danger " +
                      (this.goalLocalChange ? " blinkGoal" : "")
                    }
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
                    className={
                      "text-danger " +
                      (this.goalVisitorChange ? " blinkGoal" : "")
                    }
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
        {(this.goalLocalChange || this.goalVisitorChange) &&
        this.props.goalSound ? (
          <ReactAudioPlayer src="/sound/goalsound.mp3" autoPlay />
        ) : null}
      </>
    );
  }
}

export default FixtureItem;
