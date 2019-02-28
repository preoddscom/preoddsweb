import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
class LineupFix extends Component {
  render() {
    const { players } = this.props;

    return (
      <React.Fragment>
        <div className="card card-info card-outline">
          <div className="card-header">
            <h3 className="card-title">
              <i className="fas fa-futbol" />{" "}
              <FormattedMessage id="goal.stats" defaultMessage="Goal Stats" />
            </h3>
          </div>
          <div className="card-body p-0">
            <ul className="products-list product-list-in-card pl-2 pr-2">
              {players && players.length > 0
                ? players.map((player, index) => {
                    return (
                      <li
                        key={index}
                        className="item "
                        style={{ cursor: "pointer" }}
                      >
                        <div className="product-img">
                          <img
                            className="img-fluid"
                            src="/img/unknown.png"
                            style={{ width: "32px", height: "32px" }}
                            alt="logo"
                          />
                        </div>
                        <div className="product-info ">
                          <span className="product-title">
                            {player.player.fullName}
                            <span className="badge badge-dark float-right">
                              {player.goals}
                            </span>
                          </span>
                          <span className="product-description">
                            <img
                              className="img-fluid"
                              src={player.team.logoPath}
                              style={{ width: "16px", height: "16px" }}
                              alt="logo"
                            />{" "}
                            {player.team.name}
                          </span>
                        </div>
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LineupFix;
