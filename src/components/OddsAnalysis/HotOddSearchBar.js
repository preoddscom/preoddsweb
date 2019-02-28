import React, { Component } from "react";
import axios from "axios";
import * as Util from "../settings/Util";
import Loading from "../Loading/Loading";
import { FormattedMessage } from "react-intl";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import tr from "date-fns/locale/tr";
import en from "date-fns/locale/en-US";

class HotOddSearchBar extends Component {
  state = {
    date: moment(new Date()).format("YYYY-MM-DD"),
    marketArray: [],
    isLoading: false
  };

  componentDidMount() {
    if (this.props.lang.substring(0, 2) === "tr")
      registerLocale("locale_datePicker", tr);
    else registerLocale("locale_datePicker", en);

    this.getData();
  }

  getData = () => {
    this.setState({
      isLoading: true
    });

    this.fetchMarket();
  };

  fetchMarket = async () => {
    const response = await axios.get(
      `${Util.API_URL}market&lang=${this.props.lang}&apiKey=${Util.API_KEY}`,
      { headers: { "Access-Control-Allow-Origin": "*" } }
    );

    this.marketArrayResult = [];

    response.data.map(marketData => this.marketArrayResult.push(marketData));

    this.setState({
      isLoading: false,
      marketArray: this.marketArrayResult
    });
  };

  onOranTipiChange = e => {
    this.props.selectedMarket(
      e.target.value,
      e.target[e.target.selectedIndex].text
    );
  };

  onAnalysisPeriodChange = e => {
    this.props.analysisPeriod(e.target.value);
  };

  onWpChange = e => {
    this.props.selectedWp(e.target.value);
  };

  onEpChange = e => {
    this.props.selectedEp(e.target.value);
  };

  onMinRateChange = e => {
    this.props.selectedMinRate(e.target.value);
  };

  onFixtureStateChange = e => {
    this.props.fixtureState(e.target.value);
  };

  onDateChange = date => {
    this.setState({ date: moment(date).format("YYYY-MM-DD") });
    this.props.selectedDate(moment(date).format("YYYY-MM-DD"));
  };

  onFormSubmit = () => {
    this.props.onFilterChange();
  };
  render() {
    const { isLoading, marketArray } = this.state;
    if (isLoading) {
      return (
        <React.Fragment>
          <div className="text-center">
            <Loading loading={isLoading} text="Filter Menü Loading" />
            <br />
            <FormattedMessage id="loading" defaultMessage="Loading" />
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light p-0 m-0">
            <div className="container">
              <span className="navbar-brand  d-lg-none">
                <FormattedMessage
                  id="odds.menuHeaderHot"
                  defaultMessage="Hot Rates"
                />
              </span>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSubOdd"
                aria-controls="navbarSubOdd"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div
                className="collapse navbar-collapse border-top border-danger"
                id="navbarSubOdd"
              >
                <ul className="navbar-nav mr-auto">
                  <div className="form-group p-1">
                    <label>
                      <FormattedMessage
                        id="oddSearch.date"
                        defaultMessage="Date"
                      />
                    </label>
                    <div className="input-group">
                      <DatePicker
                        todayButton={"Today"}
                        className="form-control"
                        locale="locale_datePicker"
                        value={this.state.date}
                        onChange={this.onDateChange}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fas fa-calendar" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="form-group p-1">
                    <label>
                      <FormattedMessage
                        id="oddSearch.oddsType"
                        defaultMessage="Odds Type"
                      />
                    </label>
                    <select
                      id="oranTipi"
                      className="form-control"
                      onChange={this.onOranTipiChange}
                    >
                      {marketArray.map((market, index) => {
                        return (
                          <option
                            key={index}
                            value={market.id}
                            selected={index === 0 ? true : false}
                          >
                            {market.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="form-group p-1">
                    <label>
                      <FormattedMessage
                        id="oddSearch.analysisPeriod"
                        defaultMessage="Anlaysis Period"
                      />
                    </label>
                    <select
                      id="analysisPeriod"
                      className="form-control"
                      onChange={this.onAnalysisPeriodChange}
                    >
                      <FormattedMessage
                        id="oddSearch.oneMonth"
                        defaultMessage="1 Month"
                      >
                        {message => (
                          <option value="0" selected>
                            {message}
                          </option>
                        )}
                      </FormattedMessage>

                      <FormattedMessage
                        id="oddSearch.threeMonth"
                        defaultMessage="3 Month"
                      >
                        {message => <option value="1">{message}</option>}
                      </FormattedMessage>

                      <FormattedMessage
                        id="oddSearch.sixMonth"
                        defaultMessage="6 Month"
                      >
                        {message => <option value="2">{message}</option>}
                      </FormattedMessage>

                      <FormattedMessage
                        id="oddSearch.oneYear"
                        defaultMessage="1 Year"
                      >
                        {message => <option value="3">{message}</option>}
                      </FormattedMessage>

                      <FormattedMessage id="oddSearch.all" defaultMessage="All">
                        {message => <option value="4">{message}</option>}
                      </FormattedMessage>
                    </select>
                  </div>

                  <div className="form-group p-1">
                    <label>
                      <FormattedMessage
                        id="oddSearch.winPercentage"
                        defaultMessage="Winning Percantage"
                      />
                    </label>
                    <select
                      id="wp"
                      className="form-control"
                      onChange={this.onWpChange}
                    >
                      <option value="0"> > %0</option>
                      <option value="10">> %10</option>
                      <option value="20">> %20</option>
                      <option value="30">> %30</option>
                      <option value="40">> %40</option>
                      <option value="50" selected>
                        > %50
                      </option>
                      <option value="60">> %60</option>
                      <option value="70">> %70</option>
                      <option value="80">> %80</option>
                      <option value="90">> %90</option>
                    </select>
                  </div>

                  <div className="form-group p-1">
                    <label>
                      <FormattedMessage
                        id="oddSearch.earningPercentage"
                        defaultMessage="Earning Percantage"
                      />
                    </label>
                    <select
                      id="ep"
                      className="form-control"
                      onChange={this.onEpChange}
                    >
                      <option value="-100"> > %-100</option>
                      <option value="-50">> %-50</option>
                      <option value="-40">> %-40</option>
                      <option value="-30">> %-30</option>
                      <option value="-20" selected>
                        > %-20
                      </option>
                      <option value="-10">> %-10</option>
                      <option value="0">> %0</option>
                      <option value="10">> %10</option>
                      <option value="20">> %20</option>
                      <option value="30">> %30</option>
                      <option value="40">> %40</option>
                      <option value="50">> %50</option>
                      <option value="60">> %60</option>
                      <option value="70">> %70</option>
                      <option value="80">> %80</option>
                      <option value="90">> %90</option>
                    </select>
                  </div>

                  <div className="form-group p-1">
                    <label>
                      <FormattedMessage
                        id="oddSearch.minOdds"
                        defaultMessage="Minimum Odds"
                      />
                    </label>
                    <select
                      id="minRate"
                      className="form-control"
                      onChange={this.onMinRateChange}
                    >
                      <option value="0" selected>
                        > 1
                      </option>
                      <option value="1">> 1,10</option>
                      <option value="2">> 1,25</option>
                      <option value="3">> 1,50</option>
                      <option value="4">> 2,00</option>
                      <option value="5">> 5,00</option>
                      <option value="6">> 10,00</option>
                    </select>
                  </div>

                  <div className="form-group p-1">
                    <label>
                      <FormattedMessage
                        id="oddSearch.fixState"
                        defaultMessage="Match State"
                      />
                    </label>
                    <select
                      id="fixtureState"
                      className="form-control"
                      onChange={this.onFixtureStateChange}
                    >
                      <FormattedMessage
                        id="oddSearch.fixStateNotStart"
                        defaultMessage="Not Started"
                      >
                        {message => <option value="0">{message}</option>}
                      </FormattedMessage>

                      <FormattedMessage
                        id="oddSearch.fixStateAll"
                        defaultMessage="All"
                      >
                        {message => <option value="1">{message}</option>}
                      </FormattedMessage>
                    </select>
                  </div>

                  <form className="form-inline mt-2">
                    <button
                      type="button"
                      className="btn btn-danger pb-2"
                      onClick={this.onFormSubmit}
                    >
                      <FormattedMessage
                        id="oddSearch.filter"
                        defaultMessage="Filter"
                      />
                    </button>
                  </form>
                </ul>
              </div>
            </div>
          </nav>
        </>
      );
    }
  }
}

export default HotOddSearchBar;
