import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import "../../css/Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container bottom_border">
          <div className="row">
            <div className="col">
              <div className="alert text-danger">
                <h5>
                  <i className="icon fa fa-ban" />{" "}
                  <FormattedMessage id="alert" defaultMessage="Alert" />
                </h5>
                <FormattedMessage id="caution" defaultMessage="-" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-md col-12 col">
              <h5 className="text-white">
                <FormattedMessage
                  id="info.header"
                  defaultMessage="Information"
                />
              </h5>
              <p className="mb10">
                <FormattedMessage id="info" defaultMessage="-" />
              </p>

              <p className="text-info">
                <i className="fas fa-lg fa fa-envelope" /> info@preodds.com
              </p>
            </div>

            <div className=" col-sm-4 col-md  col-6 col ">
              <h5 className="text-white pl-5">
                <FormattedMessage
                  id="quick.links"
                  defaultMessage="Quick Links"
                />
              </h5>
              <ul className="footer_ul_amrc pl-5">
                <li>
                  <Link className="nav-link" to={{ pathname: "/privacy" }}>
                    <i className="fas fa-lock" />{" "}
                    <FormattedMessage
                      id="privacy"
                      defaultMessage="Privacy Term"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="/live" className="nav-link">
                    <img
                      src="/img/preodds/soccer-ball.png"
                      alt="ball"
                      className="img-fluid mr-1"
                      style={{ width: "14px" }}
                    />
                    <FormattedMessage id="navbar.live" defaultMessage="Live" />
                  </Link>
                </li>
                <li>
                  <Link to="/hotOdds" className="nav-link">
                    <i className="fab fa-gripfire" />{" "}
                    <FormattedMessage
                      id="navbar.hotOdds"
                      defaultMessage="Hot Rates"
                    />
                  </Link>
                </li>

                <li>
                  <Link to="/winningOdds" className="nav-link">
                    <i className="fas fa-percent" />{" "}
                    <FormattedMessage
                      id="navbar.winningOdds"
                      defaultMessage="Winning Percentage"
                    />
                  </Link>
                </li>

                <li>
                  <Link to="/profitOdds" className="nav-link">
                    <i className="fas fa-chart-line" />{" "}
                    <FormattedMessage
                      id="navbar.profitOdds"
                      defaultMessage="Profit Percentage"
                    />
                  </Link>
                </li>

                <li>
                  <Link to="/contact" className="nav-link">
                    <i className="fas fa-envelope" />{" "}
                    <FormattedMessage
                      id="navbar.contact"
                      defaultMessage="Contact"
                    />
                  </Link>
                </li>

                <li>
                  <Link to="/faq" className="nav-link">
                    <i className="fas fa-question-circle" />{" "}
                    <FormattedMessage id="navbar.qa" defaultMessage="Q&A" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className=" col-sm-4 col-md  col-12 col">
              <h5 className="text-white">
                <FormattedMessage id="follow" defaultMessage="Follow Us" />
              </h5>

              <ul className="footer_ul2_amrc">
                <li>
                  <a href="#!">
                    <i className="fab fa-twitter fleft padding-right" />{" "}
                  </a>
                  <p>
                    <a
                      href="https://twitter.com/preodds/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://twitter.com/preodds/
                    </a>
                  </p>
                </li>
                <li>
                  <a href="#!">
                    <i className="fab fa-instagram fleft padding-right" />{" "}
                  </a>
                  <p>
                    <a
                      href="https://www.instagram.com/preodds/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.instagram.com/preodds/
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container  mt-5">
          <p className="text-center">
            Copyright @{new Date().getFullYear()} | Designed With by{" "}
            <span className="text-info">PREODDS</span>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
