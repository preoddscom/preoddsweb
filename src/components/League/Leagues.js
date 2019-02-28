import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as Util from "../settings/Util";

class Leagues extends Component {
  state = {
    leagues: []
  };

  componentDidMount() {
    this.mount = false;
    this.fetchLeagues(this.props.country);
  }

  componentWillUnmount() {
    this.mount = false;
  }

  componentWillReceiveProps(nextProps) {
    this.fetchLeagues(nextProps.country);
  }

  fetchLeagues(country) {
    this.mount = true;
    fetch(
      `${Util.API_URL}leagues/${country.id}&lang=${this.props.lang}&apiKey=${
        Util.API_KEY
      }`,
      { headers: { "Access-Control-Allow-Origin": "*" } }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (this.mount) {
          return this.setState({
            leagues: data.leagues,
            country: country
          });
        }
      });
  }

  render() {
    const { leagues } = this.state;
    return (
      <div className="d-flex flex-column justify-content-center">
        {leagues.map(league => (
          <div className="pb-3 pl-2 allLeagueSubHover" key={league.id}>
            <Link
              style={{
                textDecoration: "none !important",
                link: "none",
                color: "black"
              }}
              to={`/fixtureLayout/${league.id}/${league.name}`}
            >
              <img
                src={league.logo}
                alt="logo"
                className="img-fluid"
                style={{ width: "16px" }}
              />{" "}
              {league.name}
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
export default Leagues;
