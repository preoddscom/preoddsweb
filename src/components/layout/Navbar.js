import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { Consumer } from "../../contextAPI/context";
class Navbar extends Component {
  changeLanguage = (lang, dispatch) => {
    dispatch({
      type: "CHANGE_LANG",
      payload: lang
    });
  };

  onGoalSoundChange = dispatch => {
    dispatch({
      type: "GOAL_SOUND",
      payload: !this.props.goalSound
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <nav
              className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top py-3"
              id="preoddsNavbar"
              style={{ fontSize: "15px" }}
            >
              <div className="container">
                <Link
                  className="navbar-brand"
                  style={{
                    textDecoration: "none !important",
                    link: "none",
                    color: "black"
                  }}
                  to="/"
                >
                  <img
                    src="/img/logo/preodds_white.png"
                    className="img-fluid"
                    style={{ width: "120px" }}
                    alt="logo"
                  />
                </Link>

                <button
                  className="navbar-toggler"
                  id="navbarToggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto">
                    <li
                      className="nav-item"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      <Link to="/live" className="nav-link active">
                        <div className="d-flex align-items-center">
                          <div
                            className="spinner-grow spinner-grow-sm text-danger"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                          <div className="">
                            {" "}
                            <FormattedMessage
                              id="navbar.live"
                              defaultMessage="Live"
                            />
                          </div>
                        </div>
                      </Link>
                    </li>

                    <li className="nav-item dropdown">
                      <span
                        style={{ cursor: "pointer" }}
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-chart-bar" />{" "}
                        <FormattedMessage
                          id="navbar.oddsAnalysis"
                          defaultMessage="Odds/Analysis"
                        />
                      </span>

                      <div
                        className="dropdown-menu "
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <span
                          data-toggle="collapse"
                          data-target=".navbar-collapse.show"
                          className="dropdown-item"
                          style={{ cursor: "pointer" }}
                        >
                          <Link to="/hotOdds" className="routeLink">
                            <i className="fab fa-gripfire" />{" "}
                            <FormattedMessage
                              id="navbar.hotOdds"
                              defaultMessage="Hot Odds"
                            />
                          </Link>
                        </span>

                        <span
                          data-toggle="collapse"
                          data-target=".navbar-collapse.show"
                          className="dropdown-item"
                          style={{ cursor: "pointer" }}
                        >
                          <Link to="/winningOdds" className="routeLink">
                            <i className="fas fa-percent" />{" "}
                            <FormattedMessage
                              id="navbar.winningOdds"
                              defaultMessage="Winning Percentage"
                            />
                          </Link>
                        </span>

                        <span
                          data-toggle="collapse"
                          data-target=".navbar-collapse.show"
                          className="dropdown-item"
                          style={{ cursor: "pointer" }}
                        >
                          <Link to="/profitOdds" className="routeLink">
                            <i className="fas fa-chart-line" />{" "}
                            <FormattedMessage
                              id="navbar.profitOdds"
                              defaultMessage="Proit Percentage"
                            />
                          </Link>
                        </span>
                      </div>
                    </li>
                  </ul>

                  <ul className="navbar-nav">
                    <li
                      className="nav-item"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      <Link to="/contact" className="nav-link">
                        <i className="fas fa-envelope" />{" "}
                        <FormattedMessage
                          id="navbar.contact"
                          defaultMessage="Contact"
                        />
                      </Link>
                    </li>

                    <li
                      className="nav-item"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      <Link to="/faq" className="nav-link">
                        <i className="fas fa-question-circle" />{" "}
                        <FormattedMessage id="navbar.qa" defaultMessage="Q&A" />
                      </Link>
                    </li>

                    <li className="nav-item dropdown">
                      <span
                        style={{ cursor: "pointer" }}
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-cog" />{" "}
                        <FormattedMessage
                          id="navbar.setting"
                          defaultMessage="Settings"
                        />
                      </span>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink2"
                      >
                        <span
                          className="dropdown-item"
                          style={{ cursor: "pointer" }}
                          data-toggle="collapse"
                          data-target=".navbar-collapse.show"
                          onClick={this.changeLanguage.bind(
                            this,
                            "tr",
                            dispatch
                          )}
                        >
                          <img
                            src="/img/countries/tr_TR.png"
                            alt="flag"
                            className="img-fluid"
                          />{" "}
                          TR{" "}
                          {this.props.lang.substring(0, 2) === "tr" ? (
                            <i className="fas fa-check text-success" />
                          ) : null}
                        </span>
                        <span
                          className="dropdown-item"
                          style={{ cursor: "pointer" }}
                          data-toggle="collapse"
                          data-target=".navbar-collapse.show"
                          onClick={this.changeLanguage.bind(
                            this,
                            "en",
                            dispatch
                          )}
                        >
                          <img
                            src="/img/countries/en_EN.png"
                            alt="flag"
                            className="img-fluid"
                          />{" "}
                          EN{" "}
                          {this.props.lang.substring(0, 2) === "en" ? (
                            <i className="fas fa-check text-success" />
                          ) : null}
                        </span>
                        <span
                          className="dropdown-item"
                          style={{ cursor: "pointer" }}
                          data-toggle="collapse"
                          data-target=".navbar-collapse.show"
                          onClick={this.onGoalSoundChange.bind(this, dispatch)}
                        >
                          <img
                            src="/img/preodds/soccer-ball.png"
                            alt="goal"
                            className="img-fluid"
                            style={{ width: "14px" }}
                          />{" "}
                          <FormattedMessage
                            id="navbar.goalSound"
                            defaultMessage="Goal Sound"
                          />{" "}
                          {this.props.goalSound ? (
                            <i className="fas fa-volume-up" />
                          ) : (
                            <i className="fas fa-volume-mute" />
                          )}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          );
        }}
      </Consumer>
    );
  }
}

export default Navbar;
