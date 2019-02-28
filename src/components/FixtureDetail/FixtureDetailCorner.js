import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import Loading from "../Loading/Loading";
import classNames from "classnames";

class FixtureDetailCorner extends Component {
  state = {
    isLoading: null,
    corner: []
  };

  getCorners = fixtureDetail => {
    this.setState({ isLoading: true });
    let corner = [];
    if (fixtureDetail.visitorTeamCorner.length > 0) {
      for (let i = 0; i < fixtureDetail.visitorTeamCorner.length; i++) {
        corner.push({
          id: fixtureDetail.visitorTeamCorner[i].id,
          team: "visitor",
          comment: fixtureDetail.visitorTeamCorner[i].comment,
          time: (
            fixtureDetail.visitorTeamCorner[i].minute +
            fixtureDetail.visitorTeamCorner[i].extraMinute
          )
            .toString()
            .concat("'")
        });
      }
    }
    if (fixtureDetail.localTeamCorner.length > 0) {
      for (let i = 0; i < fixtureDetail.localTeamCorner.length; i++) {
        corner.push({
          id: fixtureDetail.localTeamCorner[i].id,
          team: "local",
          comment: fixtureDetail.localTeamCorner[i].comment,
          time: (
            fixtureDetail.localTeamCorner[i].minute +
            fixtureDetail.localTeamCorner[i].extraMinute
          )
            .toString()
            .concat("'")
        });
      }
    }
    if (corner.length > 0) {
      corner.sort((a, b) => parseInt(a.id) - parseInt(b.id));
    }
    this.setState({ corner: corner, isLoading: false });
  };

  componentDidMount() {
    this.getCorners(this.props.fixtureDetail);
  }

  componentWillReceiveProps(nextProps) {
    this.getCorners(nextProps.fixtureDetail);
  }

  render() {
    const { isLoading, corner } = this.state;
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
        <div>
          <div className="mt-2 text-center bg-secondary d-block py-1">
            <h3 className="card-title">
              {" "}
              <FormattedMessage id="detail.corner" defaultMessage="Corner" />
            </h3>
          </div>
          {corner && corner.length > 0 ? (
            corner.map((corner, i) => {
              return (
                <div
                  key={i}
                  className={classNames(
                    "row p-2",
                    i % 2 === 0 ? "bg-light" : null
                  )}
                >
                  {corner.team === "local" ? (
                    <div className="col-5">
                      <div className="text-truncate">
                        <span> {corner.comment}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="col-5" />
                  )}
                  <div className="col-2  text-center">
                    <span className="badge badge-dark">{corner.time}</span>
                  </div>
                  {corner.team === "visitor" ? (
                    <div className="col-5">
                      <div className="text-truncate">
                        <span> {corner.comment}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="col-5" />
                  )}
                </div>
              );
            })
          ) : (
            <span className="font-weight-bold">No Corners</span>
          )}
        </div>
      );
    }
  }
}

export default FixtureDetailCorner;
