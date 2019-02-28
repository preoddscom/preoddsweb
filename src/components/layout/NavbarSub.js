import React, { Component } from "react";
import FavLeaguesMenu from "../League/FavLeaguesMenu";
import { FormattedMessage } from "react-intl";

class NavbarSub extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        id="preoddsNavbarSub"
        style={{ marginTop: "78px" }}
      >
        <div className="container">
          <span className="navbar-brand  d-lg-none">
            <FormattedMessage
              id="navbar.favoriteHeader"
              defaultMessage="Popular Leagues"
            />
          </span>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSub"
            aria-controls="navbarSub"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSub">
            <ul className="navbar-nav mr-auto">
              <FavLeaguesMenu lang={this.props.lang} />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavbarSub;
