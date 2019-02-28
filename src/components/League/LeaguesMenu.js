import React, { Component } from "react";
import Loading from "../Loading/Loading";
import { FormattedMessage } from "react-intl";
import Leagues from "./Leagues";
import classNames from "classnames";
import Pagination from "../General/Pagination";
import * as Util from "../settings/Util";

class LeaguesMenu extends Component {
  state = {
    isLoading: true,
    favoriteLeagues: [],
    searchText: "",
    iconType: "fa-search",

    allCountries: [],
    currentCountries: [],
    currentPage: null,
    totalPages: null,
    pageLimit: 0
  };

  componentWillUnmount() {
    this.mount = false;
  }

  componentDidMount() {
    this.mount = true;
    fetch(
      `${Util.API_URL}continents&lang=${this.props.lang}&apiKey=${
        Util.API_KEY
      }`,
      {
        headers: { "Access-Control-Allow-Origin": "*" }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        let countriesAll = [];
        data.continents.forEach(continent => {
          continent.countries.forEach(country => {
            countriesAll.push(country);
          });
        });

        if (this.mount) {
          this.setState({
            favoriteLeagues: data.favoriteLeagues,
            allCountries: countriesAll,
            isLoading: false
          });
        }
      });
  }

  onPageChanged = data => {
    const { allCountries } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentCountries = allCountries.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentCountries, totalPages, pageLimit });
  };

  handlerSearchTextClear = () => {
    const { allCountries, currentPage, pageLimit } = this.state;
    const offset = (currentPage - 1) * pageLimit;

    this.setState(() => ({
      iconType: "fa-search",
      searchText: "",
      currentCountries: allCountries.slice(offset, offset + pageLimit)
    }));
  };

  handlerSearchTextChange = e => {
    let text = e.target.value;
    if (text === "") {
      this.handlerSearchTextClear();
      return;
    }

    const currentCountries = this.state.allCountries.filter(data => {
      return data.name.toLowerCase().indexOf(text.toLowerCase()) !== -1;
    });

    this.setState(prevState => ({
      ...prevState,
      searchText: text,
      iconType: "fa-times",
      currentCountries
    }));
  };

  render() {
    const {
      isLoading,
      currentPage,
      allCountries,
      currentCountries,
      totalPages,
      iconType
    } = this.state;

    const totalCountries = allCountries.length;
    if (totalCountries === 0) return null;

    const headerClass = [
      "text-dark py-2 pr-4 m-0",
      currentPage ? "border-gray border-right" : ""
    ]
      .join(" ")
      .trim();

    if (isLoading) {
      return (
        <div className="text-center">
          <Loading loading={isLoading} />
          <br />
          <FormattedMessage id="loading" defaultMessage="Loading" />
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="row mb-2">
            <div className="col">
              <div className="input-group input-group-lg">
                <input
                  value={this.state.searchText}
                  type="text"
                  onChange={this.handlerSearchTextChange.bind(this)}
                  className="form-control form-control-no-border"
                  placeholder="Search..."
                  aria-label="Search..."
                  aria-describedby="button-addon2"
                />
                <div className="input-group-append">
                  <button
                    onClick={this.handlerSearchTextClear}
                    className="btn btn-outline-secondary form-control-no-border"
                    type="button"
                    id="button-addon2"
                  >
                    <i id="searchBtn" className={classNames("fas", iconType)} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {currentCountries
            ? currentCountries.map(country => (
                <div
                  className="card collapsed-card preoddsBottomZero"
                  key={country.id}
                >
                  <div
                    className="card-header allLeaguesMenu"
                    style={{ cursor: "pointer" }}
                  >
                    <h6
                      className="card-title"
                      data-widget="collapse"
                      style={{ fontSize: "12px" }}
                    >
                      <img
                        className="img-fluid"
                        style={{ width: "16px" }}
                        src={country.logo}
                        alt="logo"
                      />{" "}
                      {country.name}
                    </h6>
                  </div>

                  <div className="card-body bg-light">
                    <Leagues country={country} lang={this.props.lang} />
                  </div>
                </div>
              ))
            : null}
          <div className="d-flex flex-row justify-content-center align-items-center">
            <span className={headerClass}>
              <strong className="text-secondary">{totalCountries}</strong>{" "}
              <FormattedMessage
                id="leagueMenu.country"
                defaultMessage="Countries"
              />
            </span>
            {currentPage && (
              <span className="current-page d-inline-block  pl-4 text-secondary">
                <FormattedMessage id="leagueMenu.page" defaultMessage="Page" />{" "}
                <span className="font-weight-bold">{currentPage}</span> /{" "}
                <span className="font-weight-bold">{totalPages}</span>
              </span>
            )}
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <Pagination
              totalRecords={totalCountries}
              pageLimit={8}
              pageNeighbours={1}
              onPageChanged={this.onPageChanged}
            />
          </div>
        </React.Fragment>
      );
    }
  }
}

export default LeaguesMenu;
