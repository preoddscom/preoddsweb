import React, { Component } from "react";
import axios from "axios";
import * as Util from "../settings/Util";
import Loading from "../Loading/Loading";
import { FormattedMessage } from "react-intl";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import tr from "date-fns/locale/tr";
import en from "date-fns/locale/en-US";

class ProfitOddSearchBar extends Component {
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
      {
        headers: { "Access-Control-Allow-Origin": "*" }
      }
    );

    this.marketArrayResult = [];

    response.data.map(marketData => this.marketArrayResult.push(marketData));

    this.setState({
      isLoading: false,
      marketArray: this.marketArrayResult
    });
  };

  onOranTipiChange = e => {
    this.props.selectedMarket(e.target.value);
  };

  onAnalysisPeriodChange = e => {
    this.props.analysisPeriod(e.target.selectedIndex);
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
        <div className="row justify-content-lg-center">
          <div className="col-lg-8">
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-0 m-0">
              <div className="container">
                <a className="navbar-brand  d-lg-none" href="!#">
                  <FormattedMessage
                    id="odds.menuHeaderProfit"
                    defaultMessage="Profit Percentage"
                  />
                </a>
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

                        <FormattedMessage
                          id="oddSearch.all"
                          defaultMessage="All"
                        >
                          {message => <option value="4">{message}</option>}
                        </FormattedMessage>
                      </select>
                    </div>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      );
    }
  }
}

export default ProfitOddSearchBar;
