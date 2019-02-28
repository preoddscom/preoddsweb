import React, { Component } from "react";
import WinningOddSearchBar from "./WinningOddSearchBar";
import moment from "moment";
import * as Util from "../settings/Util";
import Loading from "../Loading/Loading";
import { FormattedMessage } from "react-intl";
import OddsItem from "./OddsItem";

class WinningOdds extends Component {
  state = {
    oddAnalysisArray: [],
    analysisPeriod: 0,
    selectedMarket: 1,
    selectedMarketLabel: (
      <FormattedMessage
        id="oddSelectOptionDefault.label"
        defaultMessage="Full Time"
      />
    ),
    selectedMarketLabelShow: (
      <FormattedMessage
        id="oddSelectOptionDefault.label"
        defaultMessage="Full Time"
      />
    ),
    selectedWp: 50,
    selectedMinRate: 0,
    fixtureState: 1,
    selectedDate: moment(new Date()).format("YYYY-MM-DD"),
    page: 0,
    isLastPage: false,
    spinner: false,
    isLoading: false
  };

  componentDidMount() {
    this.mount = false;
    this.getData();
  }
  componentWillUnmount() {
    this.mount = false;
  }

  componentWillReceiveProps() {
    this.getData();
  }

  getData = () => {
    this.setState(
      () => ({
        oddAnalysisArray: [],
        page: 0,
        isLoading: true
      }),
      () =>
        this.fetchAnalysis(
          this.state.selectedDate,
          this.state.selectedMarket,
          this.state.selectedWp,
          this.state.analysisPeriod,
          this.state.selectedMinRate,
          this.state.fixtureState,
          this.state.page
        )
    );
  };

  fetchAnalysis = (
    selectedDate,
    marketId,
    wpInput,
    analysisPeriod,
    minRateInput,
    fixtureState,
    page
  ) => {
    this.mount = true;
    fetch(
      `${
        Util.API_URL
      }winningPercenteFixtures/2/${marketId}/date=${selectedDate}&wp=${wpInput}&c=${analysisPeriod}&minRate=${minRateInput}&af=${fixtureState}&page=${page}&lang=${
        this.props.lang
      }&timeZone=${Util.API_TIMEZONE}&apiKey=${Util.API_KEY}`,
      {
        headers: { "Access-Control-Allow-Origin": "*" }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        let oddAnalysisArrayNew = data.fixture.map(oddAnalysis => ({
          ...oddAnalysis
        }));

        let oddAnalysisArray = [
          ...this.state.oddAnalysisArray,
          ...oddAnalysisArrayNew
        ];

        if (this.mount) {
          this.setState(prevState => ({
            isLoading: false,
            oddAnalysisArray:
              page === 0 ? oddAnalysisArrayNew : oddAnalysisArray,
            isLastPage: data.isLastPage,
            page: data.page,
            spinner: false
          }));
        }
      });
  };

  setSelectedMarket = (selectedMarket, selectedMarketLabel) => {
    this.setState({ selectedMarket, selectedMarketLabel });
  };

  setAnalysisPeriod = analysisPeriod => {
    this.setState({ analysisPeriod });
  };

  setSelectedWp = selectedWp => {
    this.setState({ selectedWp });
  };

  setSelectedMinRate = selectedMinRate => {
    this.setState({ selectedMinRate });
  };

  setFixtureState = fixtureState => {
    this.setState({ fixtureState });
  };

  setSelectedDate = date => {
    this.setState({
      date,
      selectedDate: moment(date).format("YYYY-MM-DD")
    });
  };

  onFilterChange = () => {
    this.setState(
      {
        isLoading: true,
        oddAnalysisArray: [],
        page: 0,
        selectedMarketLabelShow: this.state.selectedMarketLabel
      },
      () => {
        this.fetchAnalysis(
          this.state.selectedDate,
          this.state.selectedMarket,
          this.state.selectedWp,
          this.state.analysisPeriod,
          this.state.selectedMinRate,
          this.state.fixtureState,
          this.state.page
        );
      }
    );
  };

  onLoadMore = () => {
    if (!this.state.isLastPage) {
      this.setState({ page: this.state.page + 1, spinner: true }, () => {
        this.fetchAnalysis(
          this.state.selectedDate,
          this.state.selectedMarket,
          this.state.selectedWp,
          this.state.analysisPeriod,
          this.state.selectedMinRate,
          this.state.fixtureState,
          this.state.page
        );
      });
    }
  };

  render() {
    const {
      isLoading,
      oddAnalysisArray,
      selectedMarketLabelShow,
      isLastPage,
      spinner
    } = this.state;
    return (
      <>
        <WinningOddSearchBar
          lang={this.props.lang}
          selectedMarket={this.setSelectedMarket}
          analysisPeriod={this.setAnalysisPeriod}
          selectedWp={this.setSelectedWp}
          selectedMinRate={this.setSelectedMinRate}
          fixtureState={this.setFixtureState}
          selectedDate={this.setSelectedDate}
          onFilterChange={this.onFilterChange}
        />

        <div className="callout callout-danger font-weight-bold mt-1">
          <i className="fas fa-percent fa-lg" />{" "}
          <span style={{ fontSize: "16px" }}>
            <FormattedMessage
              id="navbar.winningOdds"
              defaultMessage="Winning Percentage"
            />
          </span>
        </div>

        {isLoading ? (
          <div className="text-center">
            <Loading loading={isLoading} />
            <br />
            <FormattedMessage id="loading" defaultMessage="Loading" />
          </div>
        ) : oddAnalysisArray && oddAnalysisArray.length > 0 ? (
          <>
            <div className="row mt-3">
              <OddsItem
                oddAnalysisArray={oddAnalysisArray}
                selectedMarketLabel={selectedMarketLabelShow}
              />
            </div>
            {!isLastPage ? (
              <div className="row justify-content-center">
                <button
                  className="btn btn-secondary mt-2"
                  disabled={spinner ? true : false}
                  type="button"
                  onClick={this.onLoadMore}
                >
                  <span
                    className={
                      spinner ? "spinner-border spinner-border-sm" : ""
                    }
                    role="status"
                    aria-hidden="true"
                  />{" "}
                  {spinner ? (
                    <FormattedMessage
                      id="loading"
                      defaultMessage="Loading..."
                    />
                  ) : (
                    <FormattedMessage
                      id="oddItem.loadMore"
                      defaultMessage="Load More"
                    />
                  )}
                </button>
              </div>
            ) : null}
          </>
        ) : (
          <FormattedMessage
            id="oddItem.noData"
            defaultMessage="No Odds found by selected search criteria"
          />
        )}
      </>
    );
  }
}

export default WinningOdds;
