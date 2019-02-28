import React from "react";
import moment from "moment";
import { FormattedMessage } from "react-intl";

const FixtureOddsHeaderResult = props => {
  const { fixtureDetail } = props;

  return fixtureDetail.timeStatus === "NS" ||
    fixtureDetail.timeStatus === "AU" ? (
    <div className="d-flex flex-column justify-content-start  text-white w-25">
      <div className="align-self-center">
        <span style={{ fontSize: "13px" }}>
          {fixtureDetail.timeStartingAtTime.substring(0, 5)}
        </span>
      </div>
      <div className="align-self-center" style={{ fontSize: "13px" }}>
        VS
      </div>
      <div className="align-self-center">
        <span style={{ fontSize: "13px" }}>
          {moment(fixtureDetail.timeStartingAtDate).format("DD.MM.YYYY")}
        </span>
      </div>
    </div>
  ) : fixtureDetail.timeStatus === "LIVE" ? (
    <div className="d-flex flex-column w-25 pt-2 text-white">
      <div
        className="align-self-center font-weight-bold"
        style={{ fontSize: "13px" }}
      >
        {fixtureDetail.timeInjuryTime > 0 ? (
          fixtureDetail.timeMinute
            .toString()
            .concat("' + ")
            .concat(fixtureDetail.timeInjuryTime)
            .concat("'")
        ) : (
          <div>
            {fixtureDetail.timeMinute}
            <span className="blink">'</span>
          </div>
        )}
      </div>
      <div className="align-self-center">
        <span className="badge badge-danger" style={{ fontSize: "13px" }}>
          {fixtureDetail.localTeamScore} - {fixtureDetail.visitorTeamScore}
        </span>
      </div>

      <div className="align-self-center">
        <span className="" style={{ fontSize: "13px" }}>
          {fixtureDetail.htScore ? (
            <span>
              <FormattedMessage id="detail.HT" defaultMessage="HT" />:{" "}
              {fixtureDetail.htScore}
            </span>
          ) : null}
        </span>
      </div>
    </div>
  ) : fixtureDetail.timeStatus === "HT" ||
    fixtureDetail.timeStatus === "FT" ||
    fixtureDetail.timeStatus === "BREAK" ? (
    <div
      className="d-flex flex-column w-25 pt-2 text-white"
      style={{ fontSize: "13px" }}
    >
      <div className="align-self-center">
        {fixtureDetail.timeStatus === "HT" ? (
          <span className="" style={{ fontSize: "13px" }}>
            <FormattedMessage id="detail.HT" defaultMessage="HT" />
          </span>
        ) : (
          <span className="" style={{ fontSize: "13px" }}>
            <FormattedMessage id="detail.FT" defaultMessage="FT" />
          </span>
        )}
      </div>
      <div className="align-self-center">
        <span className="badge badge-danger" style={{ fontSize: "13px" }}>
          {fixtureDetail.localTeamScore} - {fixtureDetail.visitorTeamScore}
        </span>
      </div>

      <div className="align-self-center">
        <span className="" style={{ fontSize: "13px" }}>
          {fixtureDetail.htScore ? (
            <span>
              <FormattedMessage id="detail.HT" defaultMessage="HT" />:{" "}
              {fixtureDetail.htScore}
            </span>
          ) : null}
        </span>
      </div>
    </div>
  ) : fixtureDetail.timeStatus === "ET" ||
    fixtureDetail.timeStatus === "AET" ? (
    <div
      className="d-flex flex-column w-25 pt-2 text-white"
      style={{ fontSize: "13px" }}
    >
      <div className="align-self-center">
        {fixtureDetail.timeStatus === "ET" ? (
          fixtureDetail.timeMinute
            .toString()
            .concat("' + ")
            .concat(fixtureDetail.timeExtraMinute)
            .concat("'")
        ) : (
          <FormattedMessage id="detail.ET" defaultMessage="ET" />
        )}
      </div>

      <div className="align-self-center">
        <span className="badge badge-danger" style={{ fontSize: "13px" }}>
          {fixtureDetail.localTeamScore} - {fixtureDetail.visitorTeamScore}
        </span>
      </div>

      <div className="align-self-center">
        <span className="" style={{ fontSize: "13px" }}>
          {fixtureDetail.htScore ? (
            <span>
              <FormattedMessage id="detail.HT" defaultMessage="HT" />:{" "}
              {fixtureDetail.htScore}
            </span>
          ) : null}
        </span>
      </div>
    </div>
  ) : fixtureDetail.timeStatus === "PEN_LIVE" ||
    fixtureDetail.timeStatus === "FT_PEN" ? (
    <div className="d-flex flex-column w-25 pt-2 text-white">
      <div className="align-self-center" style={{ fontSize: "13px" }}>
        {fixtureDetail.timeStatus === "PEN_LIVE" ? (
          <FormattedMessage id="detail.PEN_LIVE" defaultMessage="Pen Live" />
        ) : (
          <FormattedMessage id="detail.PEN" defaultMessage="Pen" />
        )}
      </div>

      <div className="align-self-center">
        <span className="badge badge-danger" style={{ fontSize: "13px" }}>
          {fixtureDetail.localTeamScore} - {fixtureDetail.visitorTeamScore}
        </span>
      </div>

      <div className="align-self-center">
        <span className="" style={{ fontSize: "13px" }}>
          {fixtureDetail.htScore ? (
            <span>
              <FormattedMessage id="detail.HT" defaultMessage="HT" />:{" "}
              {fixtureDetail.htScore}
            </span>
          ) : null}
        </span>
      </div>
    </div>
  ) : fixtureDetail.timeStatus === "POSTP" ||
    fixtureDetail.timeStatus === "INT" ||
    fixtureDetail.timeStatus === "ABAN" ||
    fixtureDetail.timeStatus === "SUSP" ||
    fixtureDetail.timeStatus === "DELAYED" ||
    fixtureDetail.timeStatus === "TBA" ? (
    <div className="d-flex flex-column w-25 pt-2 text-white">
      <div className="align-self-center">
        <FormattedMessage id="detail.POSTP" defaultMessage="Postp" />
      </div>
      <div className="align-self-center">VS</div>
      <div className="align-self-center" />
    </div>
  ) : fixtureDetail.timeStatus === "AWARD" ||
    fixtureDetail.timeStatus === "WO" ? (
    <div className="d-flex flex-column w-25 pt-2">
      <div className="align-self-center">
        <FormattedMessage id="detail.AWARD" defaultMessage="Award" />
      </div>
      <div className="align-self-center">VS</div>
      <div className="align-self-center" />
    </div>
  ) : fixtureDetail.timeStatus === "DELETED" ||
    fixtureDetail.timeStatus === "CANCL" ? (
    <div className="d-flex flex-column w-25 pt-2 text-white">
      <div className="align-self-center">
        <FormattedMessage id="detail.CANC" defaultMessage="Cancel" />
      </div>
      <div className="align-self-center">VS</div>
      <div className="align-self-center" />
    </div>
  ) : null;
};

export default FixtureOddsHeaderResult;
