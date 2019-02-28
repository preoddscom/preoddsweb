import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import moment from "moment";
import Loading from "../Loading/Loading";
import FixtureItem from "./FixtureItem";
import axios from "axios";
import * as Util from "../settings/Util";

class Fixture extends Component {
  state = {
    isLoading: null,
    roundId: null,
    fixture: []
  };

  componentDidMount() {
    this.mount = false;
    this.setState({ isLoading: true });
    this.fetchFixture(
      this.props.leagueId,
      this.props.seasonId,
      this.props.stageId,
      this.props.groupId,
      this.props.roundId
    );
  }

  componentWillUnmount() {
    this.mount = false;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isLoading: true });
    this.fetchFixture(
      nextProps.leagueId,
      nextProps.seasonId,
      nextProps.stageId,
      nextProps.groupId,
      nextProps.roundId
    );
  }

  async fetchFixture(leagueId, seasonId, stageId, groupId, roundId) {
    this.mount = true;
    try {
      const res = await axios.get(
        `${
          Util.API_URL
        }fixtureOfRound/${leagueId}/${seasonId}/${stageId}/${groupId}/${roundId}&lang=${
          this.props.lang
        }&timeZone=${Util.API_TIMEZONE}&apiKey=${Util.API_KEY}`,
        {
          headers: { "Access-Control-Allow-Origin": "*" }
        }
      );
      if (this.mount) {
        this.setState({
          fixture: res.data,
          isLoading: false
        });
      }
    } catch (e) {
      this.setState({
        fixture: null,
        isLoading: false
      });
    }
  }
  render() {
    const { fixture, isLoading } = this.state;

    if (isLoading) {
      return (
        <React.Fragment>
          <div className="col">
            <div className="text-center">
              <Loading loading={isLoading} />
              <br />
              <FormattedMessage id="loading" defaultMessage="Loading" />
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <div className="mb-2">
          {fixture ? (
            fixture.map((fix, i) => (
              <React.Fragment key={"fixture_" + i}>
                <div className="card card-default preoddsBottom">
                  <div className="card-header bg-light">
                    <h3 className="card-title">
                      <i className="fas fa-calendar-alt" />{" "}
                      {moment(fix.timeStartingAtDate).format("DD.MM.YYYY")}
                    </h3>
                  </div>
                </div>

                {fix.fixture.map((fixtureItem, idx) => (
                  <div
                    key={"fixtureItem_" + idx}
                    className="callout callout-info preoddsBottom"
                    id="fixtureBg"
                  >
                    <Link
                      style={{
                        textDecoration: "none !important",
                        link: "none",
                        color: "black"
                      }}
                      key={fixtureItem.id}
                      to={{
                        pathname: "/fixtureDetail",
                        state: {
                          fixtureId: fixtureItem.id,
                          lang: this.props.lang,
                          today: moment(fix.timeStartingAtDate).format(
                            "YYYY-MM-DD"
                          )
                        }
                      }}
                    >
                      <FixtureItem fixtureItem={fixtureItem} />
                    </Link>
                  </div>
                ))}
              </React.Fragment>
            ))
          ) : (
            <div className="text-center mb-5 mt-5">
              <span className="text-danger font-weight-bold">
                Fixture not loaded, try again !
              </span>
            </div>
          )}
        </div>
      );
    }
  }
}
export default Fixture;
