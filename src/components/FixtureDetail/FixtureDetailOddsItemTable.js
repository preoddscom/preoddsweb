import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import OddCircularBarWin from "../OddsAnalysis/OddCircularBarWin";
import OddCircularBarLost from "../OddsAnalysis/OddCircularBarLost";
import OddCircularBarProb from "../OddsAnalysis/OddCircularBarProb";

export default class FixtureDetailOddsItemTable extends Component {
  render() {
    const { odds } = this.props;
    return (
      <>
        <div className="col-lg-8">
          <table className="table">
            <thead className="bg-dark">
              <tr className="text-left" style={{ fontSize: "11px" }}>
                <th scope="col" className="">
                  <FormattedMessage
                    id="oddItem.oddType"
                    defaultMessage="Type"
                  />
                </th>
                <th scope="col" className="">
                  <FormattedMessage id="oddItem.odd" defaultMessage="Rate" />
                </th>
                <th scope="col" className="">
                  <FormattedMessage
                    id="oddItem.oddWin"
                    defaultMessage="Win #"
                  />
                </th>
                <th scope="col" className="">
                  <FormattedMessage
                    id="oddItem.oddLost"
                    defaultMessage="Lost #"
                  />
                </th>
                <th scope="col" className="">
                  <FormattedMessage
                    id="oddItem.oddWin%"
                    defaultMessage="Win %"
                  />
                </th>
                <th scope="col" className="" style={{ fontSize: "10px" }}>
                  <FormattedMessage
                    id="oddItem.oddProfit%"
                    defaultMessage="Profit %"
                  />
                </th>

                <th scope="col" className="">
                  <FormattedMessage
                    id="oddItem.oddProb%"
                    defaultMessage="Prob %"
                  />
                </th>
              </tr>
            </thead>

            <tbody>
              {odds.map((odd, index) => {
                return (
                  <tr className="text-left" key={index}>
                    <th scope="row" className="align-middle">
                      <div className="d-flex flex-column justify-content-center font-weight-bold">
                        <div>{odd.oddLabel}</div>
                        <div>
                          {odd.oddTotal ? odd.oddTotal : odd.oddHandicap}
                        </div>
                      </div>
                    </th>
                    <td className="align-middle font-weight-bold ">
                      {odd.oddWinning ? (
                        <span
                          className="badge badge-success"
                          style={{ fontSize: "15px" }}
                        >
                          {odd.oddValue}
                        </span>
                      ) : (
                        odd.oddValue
                      )}
                    </td>
                    <td className="align-middle">
                      {odd.oddAnalysis && odd.oddAnalysis.length > 0
                        ? odd.oddAnalysis[this.props.selectedAnalysisPeriod]
                            .winCount
                        : "-"}
                    </td>
                    <td className="align-middle">
                      {odd.oddAnalysis && odd.oddAnalysis.length > 0
                        ? odd.oddAnalysis[this.props.selectedAnalysisPeriod]
                            .lostCount
                        : "-"}
                    </td>
                    <td style={{ width: "70px" }}>
                      <OddCircularBarWin
                        percentage={
                          odd.oddAnalysis && odd.oddAnalysis.length > 0
                            ? odd.oddAnalysis[this.props.selectedAnalysisPeriod]
                                .winningPercent
                            : 0
                        }
                        text={
                          odd.oddAnalysis && odd.oddAnalysis.length > 0
                            ? odd.oddAnalysis[this.props.selectedAnalysisPeriod]
                                .winningPercent
                            : 0
                        }
                      />
                    </td>
                    <td style={{ width: "70px" }}>
                      <OddCircularBarLost
                        percentage={
                          odd.oddAnalysis && odd.oddAnalysis.length > 0
                            ? odd.oddAnalysis[this.props.selectedAnalysisPeriod]
                                .earningPercent
                            : 0
                        }
                        text={
                          odd.oddAnalysis && odd.oddAnalysis.length > 0
                            ? odd.oddAnalysis[this.props.selectedAnalysisPeriod]
                                .earningPercent
                            : 0
                        }
                      />
                    </td>
                    <td style={{ width: "70px" }}>
                      <OddCircularBarProb
                        percentage={
                          odd.oddAnalysis && odd.oddAnalysis.length > 0
                            ? odd.oddAnalysis[this.props.selectedAnalysisPeriod]
                                .oddGroupPercent
                            : 0
                        }
                        text={
                          odd.oddAnalysis && odd.oddAnalysis.length > 0
                            ? odd.oddAnalysis[this.props.selectedAnalysisPeriod]
                                .oddGroupPercent
                            : 0
                        }
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
