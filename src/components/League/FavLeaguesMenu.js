import React, { Component } from "react";
import Loading from "../Loading/Loading";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import * as Util from "../settings/Util";

class FavLeaguesMenu extends Component {
  state = {
    isLoading: false,
    favoriteLeagues: []
  };

  componentDidMount() {
    this.mount = false;
    this.setState({ lang: this.props.lang }, () => {
      this.fetchFavLeagues(this.props.lang);
    });
  }

  componentWillUnmount() {
    this.mount = false;
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ lang: nextProps.lang }, () => {
      this.fetchFavLeagues(nextProps.lang);
    });
  }

  fetchFavLeagues(lang) {
    this.mount = true;
    fetch(`${Util.API_URL}continents&lang=${lang}&apiKey=${Util.API_KEY}`, {
      headers: { "Access-Control-Allow-Origin": "*" }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (this.mount) {
          this.setState({
            favoriteLeagues: data.favoriteLeagues,
            isLoading: false
          });
        }
      });
  }

  render() {
    const { favoriteLeagues, isLoading } = this.state;

    if (isLoading) {
      return (
        <div className="text-center">
          <Loading loading={isLoading} />
          <br />
          <FormattedMessage id="loading" defaultMessage="Loading" />
        </div>
      );
    } else {
      return favoriteLeagues
        ? favoriteLeagues.map(league => (
            <React.Fragment key={league.id}>
              <li
                className="nav-item favSubLeague "
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <Link
                  className="nav-link"
                  style={{
                    textDecoration: "none !important",
                    link: "none",
                    color: "black"
                  }}
                  to={`/fixtureLayout/${league.id}/${league.name}`}
                >
                  <img
                    className="img-fluid"
                    src={league.logo}
                    alt="logo"
                    style={{ width: "48px" }}
                  />{" "}
                  <span className=""> {league.name}</span>
                </Link>
              </li>
            </React.Fragment>
          ))
        : null;
    }
  }
}

export default FavLeaguesMenu;
