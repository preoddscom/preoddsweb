import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
class FixtureDetailMatchWeather extends Component {
  state = {
    isLoading: null,
    fixtureDetail: null
  };

  componentDidMount() {
    const { fixtureDetail } = this.props;
    this.setState({ fixtureDetail });
  }
  render() {
    const { fixtureDetail } = this.state;
    return (
      <div className="d-none d-md-block">
        <div className="mt-2 text-center bg-secondary d-block">
          <h3 className="card-title">
            <FormattedMessage
              id="weather.weather"
              defaultMessage="Weather Info"
            />
          </h3>
        </div>

        <ul className="list-group ">
          <li className="list-group-item p-1 border-0 ">
            <span className="font-weight-bold py-1">
              <FormattedMessage
                id="detail.weather"
                defaultMessage="Weather Info"
              />
            </span>
            <span className="float-right text-capitalize">
              {fixtureDetail && fixtureDetail.weatherIcon
                ? fixtureDetail.weatherType
                : null}
            </span>
          </li>
          <li className="list-group-item p-1 border-0">
            <span className="font-weight-bold">
              <FormattedMessage id="weather.heat" defaultMessage="Heat" />
            </span>
            <span className="float-right">
              {fixtureDetail && fixtureDetail.weatherTemperatureTemp
                ? fixtureDetail.weatherTemperatureTemp
                    .toString()
                    .concat(" F / ")
                    .concat(fixtureDetail.weatherTemperatureCelsiusTemp)
                    .toString()
                    .concat(" C")
                : null}
            </span>
          </li>
          <li className="list-group-item p-1 border-0">
            <span className="font-weight-bold">
              <FormattedMessage id="weather.cloud" defaultMessage="Cloud" />
            </span>
            <span className="float-right">
              {fixtureDetail && fixtureDetail.weatherClouds ? (
                <div>
                  <i className="i fas fa-cloud" /> {fixtureDetail.weatherClouds}
                </div>
              ) : null}
            </span>
          </li>
          <li className="list-group-item p-1 border-0">
            <span className="font-weight-bold">
              {" "}
              <FormattedMessage
                id="weather.humidity"
                defaultMessage="Humidity"
              />
            </span>
            <span className="float-right">
              {fixtureDetail && fixtureDetail.weatherHumidity ? (
                <div>
                  <div className="i fas fa-cloud-moon" />{" "}
                  {fixtureDetail.weatherHumidity}
                </div>
              ) : null}
            </span>
          </li>
          <li className="list-group-item p-1 border-0">
            <span className="font-weight-bold">
              <FormattedMessage
                id="weather.wind"
                defaultMessage="Wind Degree"
              />
            </span>
            <span className="float-right">
              {fixtureDetail && fixtureDetail.weatherWindDegree
                ? fixtureDetail.weatherWindDegree
                : null}
            </span>
          </li>
          <li className="list-group-item p-1 border-0">
            <span className="font-weight-bold">
              <FormattedMessage
                id="weather.windspeed"
                defaultMessage="Wind Speed"
              />
            </span>
            <span className="float-right">
              {fixtureDetail && fixtureDetail.weatherWindSpeed
                ? fixtureDetail.weatherWindSpeed
                : null}
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default FixtureDetailMatchWeather;
