import React, { Component } from "react";
import { Link } from "react-router-dom";
import LiveFixtureItem from "./LiveFixtureItem";
import { FormattedMessage } from "react-intl";

class LiveFavorite extends Component {
  render() {
    const { liveForFavorite } = this.props;
    return (
      <React.Fragment>
        {liveForFavorite && liveForFavorite.length > 0 ? (
          <div>
            <div className="card card-warning card-outline preoddsBottom">
              <div className="card-header">
                <h3 className="card-title text-warning">
                  <i className="fas fa-star text-warning" />{" "}
                  <FormattedMessage
                    id="live.favorite"
                    defaultMessage="Favorite"
                  />
                </h3>
              </div>
            </div>
            {liveForFavorite.map((live, index) => (
              <div
                className="callout callout-warning"
                key={"liveFavorite_" + index}
              >
                <div className="d-flex">
                  <div className="flex-grow-1">
                    <Link
                      style={{
                        textDecoration: "none !important",
                        link: "none",
                        color: "black"
                      }}
                      key={live.id}
                      to={{
                        pathname: "/fixtureDetail",
                        state: {
                          fixtureId: live.id,
                          lang: this.props.lang,
                          today: this.props.today
                        }
                      }}
                    >
                      <LiveFixtureItem
                        lang={this.props.lang}
                        fixtureItem={live}
                      />
                    </Link>
                  </div>

                  <div
                    style={{ cursor: "pointer" }}
                    onClick={this.props.removeFavoriteLive.bind(this, live)}
                    className="d-flex border-left border-info justify-content-center align-items-center pl-2"
                  >
                    <div>
                      <i className="fas fa-star text-warning" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default LiveFavorite;
