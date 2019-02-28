import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import FormStanding from "./FormStanding";

export default class OverallStanding extends Component {
  render() {
    const { standings } = this.props;
    return !standings || standings.length === 0 ? null : (
      <React.Fragment>
        <table className="table table-sm  table-hover">
          <thead>
            <tr>
              <th scope="col">&nbsp;</th>
              <th scope="col">
                <FormattedMessage id="standing.team" defaultMessage="Team" />
              </th>
              <th scope="col" className="text-center">
                <FormattedMessage id="standing.played" defaultMessage="MP" />
              </th>
              <th scope="col" className="d-none d-lg-table-cell text-center">
                <FormattedMessage id="standing.win" defaultMessage="W" />
              </th>
              <th scope="col" className="d-none d-lg-table-cell text-center">
                <FormattedMessage id="standing.draw" defaultMessage="D" />
              </th>
              <th scope="col" className="d-none d-lg-table-cell text-center">
                <FormattedMessage id="standing.lost" defaultMessage="L" />
              </th>
              <th scope="col" className="text-center">
                <FormattedMessage id="standing.goal" defaultMessage="G" />
              </th>

              <th scope="col" className="text-center">
                <FormattedMessage id="standing.points" defaultMessage="P" />
              </th>
              <th scope="col" className="text-center">
                <FormattedMessage id="standing.average" defaultMessage="Av" />
              </th>
              <th scope="col" className="d-none d-lg-table-cell">
                &nbsp;
              </th>
            </tr>
          </thead>
          <tbody>
            {standings.map((standing, index) => {
              return (
                <tr key={index}>
                  <th scope="row">
                    <img
                      src={standing.team.logoPath}
                      style={{ width: "24px" }}
                      alt="logo"
                    />
                  </th>
                  <td className="truncateText">
                    <span>{standing.team.name}</span>
                  </td>
                  <td className="text-center">
                    {standing.standingsOverallGamesPlayed}
                  </td>
                  <td className="d-none d-lg-table-cell text-center">
                    {standing.standingsOverallWon}
                  </td>
                  <td className="d-none d-lg-table-cell text-center">
                    {standing.standingsOverallDraw}
                  </td>
                  <td className="d-none d-lg-table-cell text-center">
                    {standing.standingsOverallLost}
                  </td>
                  <td className="text-center">
                    {standing.standingsOverallGoalsScored}
                  </td>

                  <td className="text-center">
                    <span className="text-success  font-weight-bold">
                      {standing.standingsTotalPoints}
                    </span>
                  </td>
                  <td className="text-center">
                    {standing.standingsTotalGoalDifference}
                  </td>
                  <td className="d-none d-lg-table-cell text-center">
                    <FormStanding standing={standing} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
