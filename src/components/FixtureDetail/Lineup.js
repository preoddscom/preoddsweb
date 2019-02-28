import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

class Lineup extends Component {
  render() {
    const { fixtureDetail } = this.props;

    return (
      <>
        <div className="row">
          <div className="col-lg-6">
            <div className="card card-success card-outline">
              <div className="card-header">
                <h3 className="card-title">
                  <img
                    className="img-fluid"
                    src={fixtureDetail.localTeam.logoPath}
                    style={{ width: "36px", height: "36px" }}
                    alt="logo"
                  />{" "}
                  <FormattedMessage
                    id="detail.lineupheader"
                    defaultMessage="Lineup"
                  />{" "}
                  <span className="text-secondary">
                    {fixtureDetail.localTeamFormation}{" "}
                  </span>
                </h3>

                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-widget="collapse"
                  >
                    <i className="fa fa-minus" />
                  </button>
                </div>
              </div>
              <div className="card-body p-0">
                <ul className="products-list product-list-in-card pl-2 pr-2">
                  {fixtureDetail.localTeamLineup &&
                  fixtureDetail.localTeamLineup.length > 0
                    ? fixtureDetail.localTeamLineup.map((lineup, index) => {
                        return (
                          <li
                            key={index}
                            className="item "
                            style={{ cursor: "pointer" }}
                          >
                            <div className="product-img">
                              <span className="fa-stack fa-1x">
                                <i className="fas fa-tshirt text-success fa-stack-2x" />
                                <strong className="fas  fa-stack-1x fa-inverse">
                                  {lineup.number}
                                </strong>
                              </span>
                            </div>
                            <div className="product-info ">
                              <span className="product-title">
                                {lineup.playerName}
                              </span>
                              <span className="product-description text-secondary">
                                {lineup.position === "G" ? (
                                  <FormattedMessage
                                    id="position.goalkeeper"
                                    defaultMessage="Goalkeeper"
                                  />
                                ) : lineup.position === "D" ? (
                                  <FormattedMessage
                                    id="position.defansive"
                                    defaultMessage="Defansive"
                                  />
                                ) : lineup.position === "M" ? (
                                  <FormattedMessage
                                    id="position.midfielder"
                                    defaultMessage="Midfielder"
                                  />
                                ) : lineup.position === "F" ? (
                                  <FormattedMessage
                                    id="position.santrafor"
                                    defaultMessage="Santrafor"
                                  />
                                ) : (
                                  ""
                                )}
                              </span>
                            </div>
                          </li>
                        );
                      })
                    : null}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card card-danger card-outline">
              <div className="card-header">
                <h3 className="card-title">
                  <img
                    className="img-fluid"
                    src={fixtureDetail.visitorTeam.logoPath}
                    style={{ width: "36px", height: "36px" }}
                    alt="logo"
                  />{" "}
                  <FormattedMessage
                    id="detail.lineupheader"
                    defaultMessage="Lineup"
                  />{" "}
                  <span className="text-secondary">
                    {fixtureDetail.visitorTeamFormation}
                  </span>
                </h3>

                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-widget="collapse"
                  >
                    <i className="fa fa-minus" />
                  </button>
                </div>
              </div>
              <div className="card-body p-0">
                <ul className="products-list product-list-in-card pl-2 pr-2">
                  {fixtureDetail.visitorTeamLineup &&
                  fixtureDetail.visitorTeamLineup.length > 0
                    ? fixtureDetail.visitorTeamLineup.map((lineup, index) => {
                        return (
                          <li
                            key={index}
                            className="item "
                            style={{ cursor: "pointer" }}
                          >
                            <div className="product-img">
                              <span className="fa-stack fa-1x">
                                <i className="fas fa-tshirt text-danger fa-stack-2x" />
                                <strong className="fas  fa-stack-1x fa-inverse">
                                  {lineup.number}
                                </strong>
                              </span>
                            </div>
                            <div className="product-info ">
                              <span className="product-title">
                                {lineup.playerName}
                              </span>
                              <span className="product-description text-secondary">
                                {lineup.position === "G" ? (
                                  <FormattedMessage
                                    id="position.goalkeeper"
                                    defaultMessage="Goalkeeper"
                                  />
                                ) : lineup.position === "D" ? (
                                  <FormattedMessage
                                    id="position.defansive"
                                    defaultMessage="Defansive"
                                  />
                                ) : lineup.position === "M" ? (
                                  <FormattedMessage
                                    id="position.midfielder"
                                    defaultMessage="Midfielder"
                                  />
                                ) : lineup.position === "F" ? (
                                  <FormattedMessage
                                    id="position.santrafor"
                                    defaultMessage="Santrafor"
                                  />
                                ) : (
                                  ""
                                )}
                              </span>
                            </div>
                          </li>
                        );
                      })
                    : null}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="card card-secondary card-outline">
              <div className="card-header">
                <h3 className="card-title">
                  <img
                    className="img-fluid"
                    src={fixtureDetail.localTeam.logoPath}
                    style={{ width: "36px", height: "36px" }}
                    alt="logo"
                  />{" "}
                  <FormattedMessage
                    id="detail.lineupsub"
                    defaultMessage="Lineup Substitutes"
                  />
                </h3>

                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-widget="collapse"
                  >
                    <i className="fa fa-minus" />
                  </button>
                </div>
              </div>
              <div className="card-body p-0">
                <ul className="products-list product-list-in-card pl-2 pr-2">
                  {fixtureDetail.localTeamBench &&
                  fixtureDetail.localTeamBench.length > 0
                    ? fixtureDetail.localTeamBench.map((lineup, index) => {
                        return (
                          <li
                            key={index}
                            className="item "
                            style={{ cursor: "pointer" }}
                          >
                            <div className="product-img">
                              <span className="fa-stack fa-1x">
                                <i className="fas fa-tshirt  fa-stack-2x" />
                                <strong className="fas  fa-stack-1x fa-inverse">
                                  {lineup.number}
                                </strong>
                              </span>
                            </div>
                            <div className="product-info ">
                              <span className="product-title">
                                {lineup.playerName}
                              </span>
                              <span className="product-description text-secondary">
                                {lineup.position === "G" ? (
                                  <FormattedMessage
                                    id="position.goalkeeper"
                                    defaultMessage="Goalkeeper"
                                  />
                                ) : lineup.position === "D" ? (
                                  <FormattedMessage
                                    id="position.defansive"
                                    defaultMessage="Defansive"
                                  />
                                ) : lineup.position === "M" ? (
                                  <FormattedMessage
                                    id="position.midfielder"
                                    defaultMessage="Midfielder"
                                  />
                                ) : lineup.position === "F" ? (
                                  <FormattedMessage
                                    id="position.santrafor"
                                    defaultMessage="Santrafor"
                                  />
                                ) : (
                                  ""
                                )}
                              </span>
                            </div>
                          </li>
                        );
                      })
                    : null}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card card-secondary card-outline">
              <div className="card-header">
                <h3 className="card-title">
                  <img
                    className="img-fluid"
                    src={fixtureDetail.visitorTeam.logoPath}
                    style={{ width: "36px", height: "36px" }}
                    alt="logo"
                  />{" "}
                  <FormattedMessage
                    id="detail.lineupsub"
                    defaultMessage="Lineup Substitutes"
                  />
                </h3>

                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-widget="collapse"
                  >
                    <i className="fa fa-minus" />
                  </button>
                </div>
              </div>
              <div className="card-body p-0">
                <ul className="products-list product-list-in-card pl-2 pr-2">
                  {fixtureDetail.visitorTeamBench &&
                  fixtureDetail.visitorTeamBench.length > 0
                    ? fixtureDetail.visitorTeamBench.map((lineup, index) => {
                        return (
                          <li
                            key={index}
                            className="item "
                            style={{ cursor: "pointer" }}
                          >
                            <div className="product-img">
                              <span className="fa-stack fa-1x">
                                <i className="fas fa-tshirt fa-stack-2x" />
                                <strong className="fas  fa-stack-1x fa-inverse">
                                  {lineup.number}
                                </strong>
                              </span>
                            </div>
                            <div className="product-info ">
                              <span className="product-title">
                                {lineup.playerName}
                              </span>
                              <span className="product-description text-secondary">
                                {lineup.position === "G" ? (
                                  <FormattedMessage
                                    id="position.goalkeeper"
                                    defaultMessage="Goalkeeper"
                                  />
                                ) : lineup.position === "D" ? (
                                  <FormattedMessage
                                    id="position.defansive"
                                    defaultMessage="Defansive"
                                  />
                                ) : lineup.position === "M" ? (
                                  <FormattedMessage
                                    id="position.midfielder"
                                    defaultMessage="Midfielder"
                                  />
                                ) : lineup.position === "F" ? (
                                  <FormattedMessage
                                    id="position.santrafor"
                                    defaultMessage="Santrafor"
                                  />
                                ) : (
                                  ""
                                )}
                              </span>
                            </div>
                          </li>
                        );
                      })
                    : null}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Lineup;
