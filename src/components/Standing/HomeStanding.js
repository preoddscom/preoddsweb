import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
export default class HomeStanding extends Component {
  render() {
    const { standings } = this.props;
    return !standings || standings.length === 0 ? null : (
      <React.Fragment>
        <table className="table table-sm table-hover">
          <thead>
            <tr>
              <th scope="col">&nbsp;</th>
              <th scope="col" className="text-left">
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
                <FormattedMessage id="standing.gf" defaultMessage="GF" />
              </th>
              <th scope="col" className="text-center">
                <FormattedMessage id="standing.ga" defaultMessage="GA" />
              </th>
              <th scope="col" className="text-center">
                <FormattedMessage id="standing.points" defaultMessage="P" />
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
                    {standing.standingsHomeGamesPlayed}
                  </td>
                  <td className="d-none d-lg-table-cell text-center">
                    {standing.standingsHomeWon}
                  </td>
                  <td className="d-none d-lg-table-cell text-center">
                    {standing.standingsHomeDraw}
                  </td>
                  <td className="d-none d-lg-table-cell text-center">
                    {standing.standingsHomeLost}
                  </td>
                  <td className="text-center">
                    {standing.standingsHomeGoalsScored}
                  </td>
                  <td className="text-center">
                    {standing.standingsHomeGoalsAgainst}
                  </td>
                  <td className="text-center">
                    <span className="text-success  font-weight-bold">
                      {standing.standingsHomeWon * 3 +
                        standing.standingsHomeDraw}
                    </span>
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
