import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import Loading from "../Loading/Loading";
import classNames from "classnames";
class FixtureDetailEvent extends Component {
  state = {
    isLoading: null,
    events: []
  };

  getevents = fixtureDetail => {
    this.setState({ isLoading: true });
    let event = [];
    if (fixtureDetail.visitorTeamEvents.length > 0) {
      for (let i = 0; i < fixtureDetail.visitorTeamEvents.length; i++) {
        event.push({
          id: fixtureDetail.visitorTeamEvents[i].id,
          team: "visitor",
          player: fixtureDetail.visitorTeamEvents[i].playerName,
          related_player: fixtureDetail.visitorTeamEvents[i].relatedPlayerName,
          type_of_event: fixtureDetail.visitorTeamEvents[i].type,
          icon:
            fixtureDetail.visitorTeamEvents[i].type === "substitution" ? (
              <img
                src="/img/preodds/substitution.png"
                alt="flag"
                style={{
                  width: 12,
                  height: 12
                }}
              />
            ) : fixtureDetail.visitorTeamEvents[i].type === "goal" ? (
              <img
                src="/img/preodds/soccer-ball.png"
                alt="flag"
                style={{
                  width: 12,
                  height: 12
                }}
              />
            ) : fixtureDetail.visitorTeamEvents[i].type === "yellowcard" ? (
              <img
                src="/img/preodds/yellowcard.png"
                alt="flag"
                style={{
                  width: 12,
                  height: 16
                }}
              />
            ) : fixtureDetail.visitorTeamEvents[i].type === "redcard" ? (
              <img
                src="/img/preodds/redcard.png"
                alt="flag"
                style={{
                  width: 12,
                  height: 16
                }}
              />
            ) : fixtureDetail.visitorTeamEvents[i].type === "yellowred" ? (
              <img
                src="/img/preodds/yellowred.png"
                alt="flag"
                style={{
                  width: 12,
                  height: 16
                }}
              />
            ) : fixtureDetail.visitorTeamEvents[i].type === "own-goal" ? (
              <img
                src="/img/preodds/soccer-ball-own-goal.png"
                alt="flag"
                style={{
                  width: 12,
                  height: 12
                }}
              />
            ) : fixtureDetail.visitorTeamEvents[i].type === "penalty" ? (
              <img
                src="/img/preodds/soccer-ball-penalty.png"
                alt="flag"
                style={{
                  width: 12,
                  height: 12
                }}
              />
            ) : fixtureDetail.visitorTeamEvents[i].type === "missed_penalty" ? (
              <img
                src="/img/preodds/soccer-ball-missed-penalty.png"
                alt="flag"
                style={{
                  width: 12,
                  height: 12
                }}
              />
            ) : fixtureDetail.visitorTeamEvents[i].type ===
              "pen_shootout_miss" ? (
              <img
                src="/img/preodds/soccer-ball-missed-penalty.png"
                alt="flag"
                style={{
                  width: 12,
                  height: 12
                }}
              />
            ) : fixtureDetail.visitorTeamEvents[i].type ===
              "pen_shootout_goal" ? (
              <img
                src="/img/preodds/soccer-ball-penalty.png"
                alt="flag"
                style={{
                  width: 12,
                  height: 12
                }}
              />
            ) : null,
          time:
            fixtureDetail.visitorTeamEvents[i].extraMinute > 0
              ? fixtureDetail.visitorTeamEvents[i].minute
                  .toString()
                  .concat("'+")
                  .concat(fixtureDetail.visitorTeamEvents[i].extraMinute)
                  .concat("'")
              : fixtureDetail.visitorTeamEvents[i].injuried > 0
              ? fixtureDetail.visitorTeamEvents[i].minute
                  .toString()
                  .concat("'+")
                  .concat(fixtureDetail.visitorTeamEvents[i].injuried)
                  .concat("'")
              : fixtureDetail.visitorTeamEvents[i].minute.toString().concat("'")
        });
      }
    }
    if (fixtureDetail.localTeamEvents.length > 0) {
      for (let i = 0; i < fixtureDetail.localTeamEvents.length; i++) {
        event.push({
          id: fixtureDetail.localTeamEvents[i].id,
          team: "local",
          player: fixtureDetail.localTeamEvents[i].playerName,
          related_player: fixtureDetail.localTeamEvents[i].relatedPlayerName,
          type_of_event: fixtureDetail.localTeamEvents[i].type,
          icon:
            fixtureDetail.localTeamEvents[i].type === "substitution" ? (
              <img
                src="/img/preodds/substitution.png"
                alt="flag"
                style={{
                  width: 12,
                  height: 12
                }}
              />
            ) : fixtureDetail.localTeamEvents[i].type === "goal" ? (
              <img
                src="/img/preodds/soccer-ball.png"
                alt="flag"
                style={{
                  width: 12,
                  height: 12
                }}
              />
            ) : fixtureDetail.localTeamEvents[i].type === "yellowcard" ? (
              <img
                src="/img/preodds/yellowcard.png"
                alt="flag"
                style={{
                  width: 12,
                  height: 16
                }}
              />
            ) : fixtureDetail.localTeamEvents[i].type === "redcard" ? (
              <img
                src="/img/preodds/redcard.png"
                alt="flag"
                style={{
                  width: 12,
                  height: 16
                }}
              />
            ) : fixtureDetail.localTeamEvents[i].type === "yellowred" ? (
              <img
                src="/img/preodds/yellowred.png"
                alt="flag"
                style={{
                  width: 12,
                  height: 16
                }}
              />
            ) : fixtureDetail.localTeamEvents[i].type === "own-goal" ? (
              <img
                src="/img/preodds/soccer-ball-own-goal.png"
                alt="flag"
                style={{
                  width: 12,
                  height: 12
                }}
              />
            ) : fixtureDetail.localTeamEvents[i].type === "penalty" ? (
              <img
                src="/img/preodds/soccer-ball-penalty.png"
                alt="flag"
                style={{
                  width: 12,
                  height: 12
                }}
              />
            ) : fixtureDetail.localTeamEvents[i].type === "missed_penalty" ? (
              <img
                src="/img/preodds/soccer-ball-missed-penalty.png"
                alt="flag"
                style={{
                  width: 12,
                  height: 12
                }}
              />
            ) : fixtureDetail.localTeamEvents[i].type ===
              "pen_shootout_miss" ? (
              <img
                src="/img/preodds/soccer-ball-missed-penalty.png"
                alt="flag"
                style={{
                  width: 12,
                  height: 12
                }}
              />
            ) : fixtureDetail.localTeamEvents[i].type ===
              "pen_shootout_goal" ? (
              <img
                src="/img/preodds/soccer-ball-penalty.png"
                alt="flag"
                style={{
                  width: 12,
                  height: 12
                }}
              />
            ) : null,
          time:
            fixtureDetail.localTeamEvents[i].extraMinute > 0
              ? fixtureDetail.localTeamEvents[i].minute
                  .toString()
                  .concat("'+")
                  .concat(fixtureDetail.localTeamEvents[i].extraMinute)
                  .concat("'")
              : fixtureDetail.localTeamEvents[i].injuried > 0
              ? fixtureDetail.localTeamEvents[i].minute
                  .toString()
                  .concat("'+")
                  .concat(fixtureDetail.localTeamEvents[i].injuried)
                  .concat("'")
              : fixtureDetail.localTeamEvents[i].minute.toString().concat("'")
        });
      }
    }
    if (event.length > 0) {
      event.sort((a, b) => parseInt(a.id) - parseInt(b.id));
    }
    this.setState({ events: event, isLoading: false });
  };

  componentWillReceiveProps(nextProps) {
    this.getevents(nextProps.fixtureDetail);
  }

  componentDidMount() {
    this.getevents(this.props.fixtureDetail);
  }

  render() {
    const { isLoading, events } = this.state;
    const { fixtureDetail } = this.props;

    if (isLoading) {
      return (
        <React.Fragment>
          <div className="text-center">
            <Loading loading={isLoading} />
            <br />
            <FormattedMessage id="loading" defaultMessage="Loading" />
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <>
          <div className="d-flex align-items-center">
            <div className="flex-grow-1 d-flex align-items-center">
              <div>
                <img
                  src={
                    fixtureDetail.localTeam.logoPath
                      ? fixtureDetail.localTeam.logoPath
                      : null
                  }
                  width="36"
                  height="36"
                  alt="teamlogo"
                />
              </div>
              <div className="ml-1">
                <span className="font-weight-bold">
                  {fixtureDetail.localTeam ? (
                    fixtureDetail.localTeam.name ? (
                      <span
                        className="d-inline-block text-truncate"
                        style={{
                          maxWidth: "100px",
                          fontSize: "12px"
                        }}
                      >
                        {fixtureDetail.localTeam.name}
                      </span>
                    ) : null
                  ) : null}
                </span>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <div className="mr-1">
                <span className="font-weight-bold">
                  {fixtureDetail.visitorTeam ? (
                    fixtureDetail.visitorTeam.name ? (
                      <span
                        className="d-inline-block text-truncate"
                        style={{
                          maxWidth: "100px",
                          fontSize: "12px"
                        }}
                      >
                        {fixtureDetail.visitorTeam.name}
                      </span>
                    ) : null
                  ) : null}
                </span>
              </div>
              <div>
                <img
                  src={
                    fixtureDetail.visitorTeam.logoPath
                      ? fixtureDetail.visitorTeam.logoPath
                      : null
                  }
                  width="36"
                  height="36"
                  alt="teamlogo"
                />
              </div>
            </div>
          </div>

          <div className="mt-2 text-center bg-secondary d-block py-1">
            <h3 className="card-title">
              <FormattedMessage id="detail.event" defaultMessage="Events" />
            </h3>
          </div>

          {events && events.length > 0 ? (
            events.map((event, i) => {
              return (
                <div
                  key={i}
                  className={classNames(
                    "row p-2",
                    i % 2 === 0 ? "bg-light" : null
                  )}
                >
                  {event.team === "local" ? (
                    <React.Fragment>
                      {event.type_of_event === "substitution" ? (
                        <div className="col-4 text-truncate text-right  ">
                          <span className="text-danger">
                            {" "}
                            {event.related_player}
                          </span>

                          <small
                            id="passwordHelpBlock"
                            className="form-text text-muted text-truncate"
                          >
                            {event.player}
                          </small>
                        </div>
                      ) : event.type_of_event === "goal" ? (
                        <div className="col-4 text-truncate text-right  ">
                          <span className="text-success">{event.player}</span>

                          <small
                            id="passwordHelpBlock"
                            className="form-text text-muted text-truncate"
                          >
                            {event.related_player}
                          </small>
                        </div>
                      ) : (
                        <div className="col-4 text-truncate  text-right">
                          <span>{event.player}</span>
                        </div>
                      )}

                      <div className="col-1   text-right">{event.icon}</div>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <div className="col-2" />
                      <div className="col-3" />
                    </React.Fragment>
                  )}

                  <div className="col-2  text-center">
                    <span className="badge badge-dark">{event.time}</span>
                  </div>

                  {event.team === "visitor" ? (
                    <React.Fragment>
                      <div className="col-1   text-right">{event.icon}</div>

                      {event.type_of_event === "substitution" ? (
                        <div className="col-4 text-truncate ">
                          <span className="text-danger">
                            {" "}
                            {event.related_player}
                          </span>

                          <small
                            id="passwordHelpBlock"
                            className="form-text text-muted text-truncate"
                          >
                            {event.player}
                          </small>
                        </div>
                      ) : event.type_of_event === "goal" ? (
                        <div className="col-4 text-truncate">
                          <span className="text-success">{event.player}</span>

                          <small
                            id="passwordHelpBlock"
                            className="form-text text-muted text-truncate"
                          >
                            {event.related_player}
                          </small>
                        </div>
                      ) : (
                        <div className="col-4 text-truncate">
                          <span>{event.player}</span>
                        </div>
                      )}
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <div className="col-2" />
                      <div className="col-3" />
                    </React.Fragment>
                  )}
                </div>
              );
            })
          ) : (
            <span className="font-weight-bold">No Events</span>
          )}
        </>
      );
    }
  }
}

export default FixtureDetailEvent;
