import React, { Component } from "react";
import FixtureDetailStatsItem from "./FixtureDetailStatsItem";
import "react-circular-progressbar/dist/styles.css";
import StyledProgressbarLocal from "../General/CircularBarLocal";
import StyledProgressbarVisitor from "../General/CircularBarVisitor";
import { FormattedMessage } from "react-intl";

class FixtureDetailStats extends Component {
  render() {
    const { fixtureDetail } = this.props;
    return fixtureDetail ? (
      <React.Fragment>
        <div className="d-flex align-items-center">
          <div className="flex-grow-1 d-flex align-items-center">
            <div>
              <img
                src={
                  fixtureDetail.localTeam.logoPath
                    ? fixtureDetail.localTeam.logoPath
                    : null
                }
                width="36"
                height="36"
                alt="teamlogo"
              />
            </div>
            <div className="ml-1">
              <span className="font-weight-bold">
                {fixtureDetail.localTeam ? (
                  fixtureDetail.localTeam.name ? (
                    <span
                      className="d-inline-block text-truncate"
                      style={{
                        maxWidth: "100px",
                        fontSize: "12px"
                      }}
                    >
                      {fixtureDetail.localTeam.name}
                    </span>
                  ) : null
                ) : null}
              </span>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <div className="mr-1">
              <span className="font-weight-bold">
                {fixtureDetail.visitorTeam ? (
                  fixtureDetail.visitorTeam.name ? (
                    <span
                      className="d-inline-block text-truncate"
                      style={{
                        maxWidth: "100px",
                        fontSize: "12px"
                      }}
                    >
                      {fixtureDetail.visitorTeam.name}
                    </span>
                  ) : null
                ) : null}
              </span>
            </div>
            <div>
              <img
                src={
                  fixtureDetail.visitorTeam.logoPath
                    ? fixtureDetail.visitorTeam.logoPath
                    : null
                }
                width="36"
                height="36"
                alt="teamlogo"
              />
            </div>
          </div>
        </div>

        <div className="mt-2 text-center bg-dark d-block">
          <h3 className="card-title">
            <FormattedMessage
              id="statistic.statistic"
              defaultMessage="Statistic"
            />
          </h3>
        </div>
        <div className="row   justify-content-center mt-2 mb-5">
          <div className="col-2   text-center">
            <StyledProgressbarLocal
              percentage={fixtureDetail.localTeamStatistic.possessionTime}
              text={`${fixtureDetail.localTeamStatistic.possessionTime}%`}
            />
          </div>

          <div className="col-4  align-self-center  text-center font-weight-bold">
            <FormattedMessage
              id="statistic.possession"
              defaultMessage="Possession"
            />
          </div>

          <div className="col-2  text-center">
            <StyledProgressbarVisitor
              percentage={fixtureDetail.visitorTeamStatistic.possessionTime}
              text={`${fixtureDetail.visitorTeamStatistic.possessionTime}%`}
            />
          </div>
        </div>
        <h5 className="text-danger text-center">
          <FormattedMessage id="shot" defaultMessage="Shot" />
        </h5>
        <FixtureDetailStatsItem
          label={
            <FormattedMessage id="shot.shotsTotal" defaultMessage="Total" />
          }
          localValue={fixtureDetail.localTeamStatistic.shotsTotal}
          visitorValue={fixtureDetail.visitorTeamStatistic.shotsTotal}
        />
        <FixtureDetailStatsItem
          label={
            <FormattedMessage id="shot.shotsOnGoal" defaultMessage="On Goal" />
          }
          localValue={fixtureDetail.localTeamStatistic.shotsOnGoal}
          visitorValue={fixtureDetail.visitorTeamStatistic.shotsOnGoal}
        />
        <FixtureDetailStatsItem
          label={
            <FormattedMessage
              id="shot.shotsOffGoal"
              defaultMessage="Off Goal"
            />
          }
          localValue={fixtureDetail.localTeamStatistic.shotsOffGoal}
          visitorValue={fixtureDetail.visitorTeamStatistic.shotsOffGoal}
        />
        <FixtureDetailStatsItem
          label={
            <FormattedMessage id="shot.shotsBlocked" defaultMessage="Blocked" />
          }
          localValue={fixtureDetail.localTeamStatistic.shotsBlocked}
          visitorValue={fixtureDetail.visitorTeamStatistic.shotsBlocked}
        />

        <FixtureDetailStatsItem
          label={
            <FormattedMessage
              id="shot.shotsInsideBox"
              defaultMessage="Inside Box"
            />
          }
          localValue={fixtureDetail.localTeamStatistic.shotsInsideBox}
          visitorValue={fixtureDetail.visitorTeamStatistic.shotsInsideBox}
        />
        <FixtureDetailStatsItem
          label={
            <FormattedMessage
              id="shot.shotsOutsideBox"
              defaultMessage="Outside Box"
            />
          }
          localValue={fixtureDetail.localTeamStatistic.shotsOutsideBox}
          visitorValue={fixtureDetail.visitorTeamStatistic.shotsOutsideBox}
        />
        <FixtureDetailStatsItem
          label={<FormattedMessage id="shot.saves" defaultMessage="Saves" />}
          localValue={fixtureDetail.localTeamStatistic.saves}
          visitorValue={fixtureDetail.visitorTeamStatistic.saves}
        />
        <FixtureDetailStatsItem
          label={
            <FormattedMessage id="shot.goalKick" defaultMessage="Goal Kick" />
          }
          localValue={fixtureDetail.localTeamStatistic.goalKick}
          visitorValue={fixtureDetail.visitorTeamStatistic.goalKick}
        />
        <h5 className="text-danger text-center">
          <FormattedMessage id="passes" defaultMessage="Passes" />
        </h5>

        <div className="row   justify-content-center mt-2 mb-5">
          <div className="col-2   text-center">
            <StyledProgressbarLocal
              percentage={fixtureDetail.localTeamStatistic.passesPercentage}
              text={`${fixtureDetail.localTeamStatistic.passesPercentage}%`}
            />
          </div>

          <div className="col-4 align-self-center text-center font-weight-bold">
            <span>
              <FormattedMessage
                id="passes.passesPercentage"
                defaultMessage="Passes Percentage"
              />
            </span>
          </div>

          <div className="col-2  text-center">
            <StyledProgressbarVisitor
              percentage={fixtureDetail.visitorTeamStatistic.passesPercentage}
              text={`${fixtureDetail.visitorTeamStatistic.passesPercentage}%`}
            />
          </div>
        </div>

        <FixtureDetailStatsItem
          label={
            <FormattedMessage id="passes.passesTotal" defaultMessage="Total" />
          }
          localValue={fixtureDetail.localTeamStatistic.passesTotal}
          visitorValue={fixtureDetail.visitorTeamStatistic.passesTotal}
        />

        <FixtureDetailStatsItem
          label={
            <FormattedMessage
              id="passes.passesAccurate"
              defaultMessage="Accurate"
            />
          }
          localValue={fixtureDetail.localTeamStatistic.passesAccurate}
          visitorValue={fixtureDetail.visitorTeamStatistic.passesAccurate}
        />
        <FixtureDetailStatsItem
          label={
            <FormattedMessage id="passes.ballSafe" defaultMessage="Ball Safe" />
          }
          localValue={fixtureDetail.localTeamStatistic.ballSafe}
          visitorValue={fixtureDetail.visitorTeamStatistic.ballSafe}
        />

        <FixtureDetailStatsItem
          label={
            <FormattedMessage id="passes.attacks" defaultMessage="Attacks" />
          }
          localValue={fixtureDetail.localTeamStatistic.attacksAttacks}
          visitorValue={fixtureDetail.visitorTeamStatistic.attacksAttacks}
        />

        <h5 className="text-danger text-center">
          <FormattedMessage id="discipline" defaultMessage="Discipline" />
        </h5>
        <FixtureDetailStatsItem
          label={
            <FormattedMessage
              id="discipline.substitutions"
              defaultMessage="Substitutions"
            />
          }
          localValue={fixtureDetail.localTeamStatistic.substitutions}
          visitorValue={fixtureDetail.visitorTeamStatistic.substitutions}
        />
        <FixtureDetailStatsItem
          label={
            <FormattedMessage
              id="discipline.yellowCards"
              defaultMessage="Yellow Cards"
            />
          }
          localValue={fixtureDetail.localTeamStatistic.yellowCards}
          visitorValue={fixtureDetail.visitorTeamStatistic.yellowCards}
        />
        <FixtureDetailStatsItem
          label={
            <FormattedMessage
              id="discipline.redCards"
              defaultMessage="Red Cards"
            />
          }
          localValue={fixtureDetail.localTeamStatistic.redCards}
          visitorValue={fixtureDetail.visitorTeamStatistic.redCards}
        />

        <FixtureDetailStatsItem
          label={
            <FormattedMessage
              id="discipline.offsides"
              defaultMessage="Offsides"
            />
          }
          localValue={fixtureDetail.localTeamStatistic.offsides}
          visitorValue={fixtureDetail.visitorTeamStatistic.offsides}
        />

        <FixtureDetailStatsItem
          label={
            <FormattedMessage id="discipline.fouls" defaultMessage="Fouls" />
          }
          localValue={fixtureDetail.localTeamStatistic.fouls}
          visitorValue={fixtureDetail.visitorTeamStatistic.fouls}
        />

        <h5 className="text-danger text-center">
          <FormattedMessage id="freekick" defaultMessage="Freekick" />
        </h5>

        <FixtureDetailStatsItem
          label={
            <FormattedMessage
              id="freekick.freekick"
              defaultMessage="Freekick"
            />
          }
          localValue={fixtureDetail.localTeamStatistic.freeKick}
          visitorValue={fixtureDetail.visitorTeamStatistic.freeKick}
        />

        <FixtureDetailStatsItem
          label={
            <FormattedMessage id="freekick.corner" defaultMessage="Corner" />
          }
          localValue={fixtureDetail.localTeamStatistic.corners}
          visitorValue={fixtureDetail.visitorTeamStatistic.corners}
        />
        <FixtureDetailStatsItem
          label={
            <FormattedMessage id="freekick.touch" defaultMessage="Touch" />
          }
          localValue={fixtureDetail.localTeamStatistic.throwIn}
          visitorValue={fixtureDetail.visitorTeamStatistic.throwIn}
        />
      </React.Fragment>
    ) : null;
  }
}
export default FixtureDetailStats;
