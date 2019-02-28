import React, { Component } from "react";
import FixtureDetailOddSearchBar from "./FixtureDetailOddSearchBar";
import * as Util from "../settings/Util";
import Loading from "../Loading/Loading";
import { FormattedMessage } from "react-intl";
import FixtureDetailOddsItemTable from "./FixtureDetailOddsItemTable";

class FixtureDetailAnalysis extends Component {
  state = {
    oddAnalysisArray: [],
    selectedAnalysisPeriod: 0,
    selectedMarket: 1,
    isLoading: false
  };

  setSelectedMarket = selectedMarket => {
    this.setState({ selectedMarket }, () => {
      this.onFilterChange();
    });
  };

  setAnalysisPeriod = selectedAnalysisPeriod => {
    this.setState({ selectedAnalysisPeriod });
  };

  componentWillReceiveProps(nextProps, nextState) {
    //silme refresh olayını engellemek için
  }

  componentDidMount() {
    this.mount = false;
    this.getData();
  }

  componentWillUnmount() {
    this.mount = false;
  }

  getData = () => {
    this.setState(
      () => ({
        oddAnalysisArray: [],
        isLoading: true
      }),
      () => this.fetchAnalysis(this.state.selectedMarket)
    );
  };

  fetchAnalysis = marketId => {
    this.mount = true;

    fetch(
      `${Util.API_URL}fixtureOdds/${this.props.fixtureId}/2/${marketId}&lang=${
        this.props.lang
      }&apiKey=${Util.API_KEY}`,
      {
        headers: { "Access-Control-Allow-Origin": "*" }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        let oddAnalysisArrayNew = data.map(oddAnalysis => ({
          ...oddAnalysis
        }));
        if (this.mount) {
          this.setState(prevState => ({
            isLoading: false,
            oddAnalysisArray: oddAnalysisArrayNew
          }));
        }
      });
  };

  onFilterChange = () => {
    this.setState(
      {
        isLoading: true,
        oddAnalysisArray: []
      },
      () => {
        this.fetchAnalysis(this.state.selectedMarket);
      }
    );
  };

  render() {
    const { isLoading, oddAnalysisArray, selectedAnalysisPeriod } = this.state;
    return (
      <>
        <FixtureDetailOddSearchBar
          lang={this.props.lang}
          selectedMarket={this.setSelectedMarket}
          analysisPeriod={this.setAnalysisPeriod}
        />

        {isLoading ? (
          <div className="text-center">
            <Loading loading={isLoading} />
            <br />
            <FormattedMessage id="loading" defaultMessage="Loading" />
          </div>
        ) : oddAnalysisArray && oddAnalysisArray.length > 0 ? (
          <>
            <div className="row mt-3 justify-content-lg-center">
              <FixtureDetailOddsItemTable
                odds={oddAnalysisArray[0].bookmarkers[0].odd}
                selectedAnalysisPeriod={selectedAnalysisPeriod}
              />
            </div>
          </>
        ) : (
          <div className="text-center text-danger font-weight-bold">
            <FormattedMessage
              id="oddItem.noData"
              defaultMessage="No Odds found by selected search criteria"
            />
          </div>
        )}
      </>
    );
  }
}

export default FixtureDetailAnalysis;
