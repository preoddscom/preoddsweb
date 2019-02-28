import React, { Component } from "react";
import FixtureDetailStatsItem from "./FixtureDetailStatsItem";
import "react-circular-progressbar/dist/styles.css";
import StyledProgressbarLocal from "../General/CircularBarLocal";
import StyledProgressbarVisitor from "../General/CircularBarVisitor";
import { FormattedMessage } from "react-intl";

class FixtureDetailStatsAnalysis extends Component {
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
                width="48"
                height="48"
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
              <span className="font-weight-bold ">
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
                width="48"
                height="48"
                alt="teamlogo"
              />
            </div>
          </div>
        </div>

        <div className="mt-2 text-center bg-dark d-block py-1">
          <h3 className="card-title">
            <FormattedMessage
              id="statistic.last10Avg"
              defaultMessage="Last 10 Mathces Average"
            />
          </h3>
        </div>
        <div className="row   justify-content-center mt-2 mb-5">
          <div className="col-2   text-center">
            <StyledProgressbarLocal
              percentage={
                fixtureDetail.localTeamStatisticAnalysis.possessionTime
              }
              text={`${
                fixtureDetail.localTeamStatisticAnalysis.possessionTime
              }%`}
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
              percentage={
                fixtureDetail.visitorTeamStatisticAnalysis.possessionTime
              }
              text={`${
                fixtureDetail.visitorTeamStatisticAnalysis.possessionTime
              }%`}
            />
          </div>
        </div>

        <h5 className="text-danger text-center">
          <FormattedMessage id="msgoal" defaultMessage="Full Time Goals" />
        </h5>

        <FixtureDetailStatsItem
          label={
            <FormattedMessage id="msgoal.forward" defaultMessage="Forward" />
          }
          localValue={fixtureDetail.localTeamStatisticAnalysis.goalFor}
          visitorValue={fixtureDetail.visitorTeamStatisticAnalysis.goalFor}
        />

        <FixtureDetailStatsItem
          label={
            <FormattedMessage id="msgoal.against" defaultMessage="Against" />
          }
          localValue={fixtureDetail.localTeamStatisticAnalysis.goalAgainst}
          visitorValue={fixtureDetail.visitorTeamStatisticAnalysis.goalAgainst}
        />

        <FixtureDetailStatsItem
          label={<FormattedMessage id="msgoal.total" defaultMessage="Total" />}
          localValue={fixtureDetail.localTeamStatisticAnalysis.goalTotal}
          visitorValue={fixtureDetail.visitorTeamStatisticAnalysis.goalTotal}
        />

        <h5 className="text-danger text-center">
          <FormattedMessage id="htgoal" defaultMessage="Half Time Goals" />
        </h5>

        <FixtureDetailStatsItem
          label={
            <FormattedMessage id="htgoal.forward" defaultMessage="Forward" />
          }
          localValue={fixtureDetail.localTeamStatisticAnalysis.goalHTFor}
          visitorValue={fixtureDetail.visitorTeamStatisticAnalysis.goalHTFor}
        />

        <FixtureDetailStatsItem
          label={
            <FormattedMessage id="htgoal.against" defaultMessage="Against" />
          }
          localValue={fixtureDetail.localTeamStatisticAnalysis.goalHTAgainst}
          visitorValue={
            fixtureDetail.visitorTeamStatisticAnalysis.goalHTAgainst
          }
        />

        <FixtureDetailStatsItem
          label={<FormattedMessage id="htgoal.total" defaultMessage="Total" />}
          localValue={fixtureDetail.localTeamStatisticAnalysis.goalHTTotal}
          visitorValue={fixtureDetail.visitorTeamStatisticAnalysis.goalHTTotal}
        />

        <h5 className="text-danger text-center">
          <FormattedMessage id="shot" defaultMessage="Shot" />
        </h5>

        <FixtureDetailStatsItem
          label={
            <FormattedMessage id="shot.shotsTotal" defaultMessage="Total" />
          }
          localValue={fixtureDetail.localTeamStatisticAnalysis.shotsTotal}
          visitorValue={fixtureDetail.visitorTeamStatisticAnalysis.shotsTotal}
        />

        <FixtureDetailStatsItem
          label={
            <FormattedMessage id="shot.shotsTotal" defaultMessage="Total" />
          }
          localValue={fixtureDetail.localTeamStatisticAnalysis.shotsTotal}
          visitorValue={fixtureDetail.visitorTeamStatisticAnalysis.shotsTotal}
        />
        <FixtureDetailStatsItem
          label={
            <FormattedMessage id="shot.shotsOnGoal" defaultMessage="On Goal" />
          }
          localValue={fixtureDetail.localTeamStatisticAnalysis.shotsOnGoal}
          visitorValue={fixtureDetail.visitorTeamStatisticAnalysis.shotsOnGoal}
        />
        <FixtureDetailStatsItem
          label={
            <FormattedMessage
              id="shot.shotsOffGoal"
              defaultMessage="Off Goal"
            />
          }
          localValue={fixtureDetail.localTeamStatisticAnalysis.shotsOffGoal}
          visitorValue={fixtureDetail.visitorTeamStatisticAnalysis.shotsOffGoal}
        />
        <FixtureDetailStatsItem
          label={
            <FormattedMessage id="shot.shotsBlocked" defaultMessage="Blocked" />
          }
          localValue={fixtureDetail.localTeamStatisticAnalysis.shotsBlocked}
          visitorValue={fixtureDetail.visitorTeamStatisticAnalysis.shotsBlocked}
        />

        <FixtureDetailStatsItem
          label={
            <FormattedMessage
              id="shot.shotsInsideBox"
              defaultMessage="Inside Box"
            />
          }
          localValue={fixtureDetail.localTeamStatisticAnalysis.shotsInsideBox}
          visitorValue={
            fixtureDetail.visitorTeamStatisticAnalysis.shotsInsideBox
          }
        />
        <FixtureDetailStatsItem
          label={
            <FormattedMessage
              id="shot.shotsOutsideBox"
              defaultMessage="Outside Box"
            />
          }
          localValue={fixtureDetail.localTeamStatisticAnalysis.shotsOutsideBox}
          visitorValue={
            fixtureDetail.visitorTeamStatisticAnalysis.shotsOutsideBox
          }
        />
        <FixtureDetailStatsItem
          label={<FormattedMessage id="shot.saves" defaultMessage="Saves" />}
          localValue={fixtureDetail.localTeamStatisticAnalysis.saves}
          visitorValue={fixtureDetail.visitorTeamStatisticAnalysis.saves}
        />
        <FixtureDetailStatsItem
          label={
            <FormattedMessage id="shot.goalKick" defaultMessage="Goal Kick" />
          }
          localValue={fixtureDetail.localTeamStatisticAnalysis.goalKick}
          visitorValue={fixtureDetail.visitorTeamStatisticAnalysis.goalKick}
        />
        <h5 className="text-danger text-center">
          <FormattedMessage id="passes" defaultMessage="Passes" />
        </h5>

        <div className="row   justify-content-center mt-2 mb-5">
          <div className="col-2   text-center">
            <StyledProgressbarLocal
              percentage={
                fixtureDetail.localTeamStatisticAnalysis.passesPercentage
              }
              text={`${
                fixtureDetail.localTeamStatisticAnalysis.passesPercentage
              }%`}
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
              percentage={
                fixtureDetail.visitorTeamStatisticAnalysis.passesPercentage
              }
              text={`${
                fixtureDetail.visitorTeamStatisticAnalysis.passesPercentage
              }%`}
            />
          </div>
        </div>

        <FixtureDetailStatsItem
          label={
            <FormattedMessage id="passes.passesTotal" defaultMessage="Total" />
          }
          localValue={fixtureDetail.localTeamStatisticAnalysis.passesTotal}
          visitorValue={fixtureDetail.visitorTeamStatisticAnalysis.passesTotal}
        />

        <FixtureDetailStatsItem
          label={
            <FormattedMessage
              id="passes.passesAccurate"
              defaultMessage="Accurate"
            />
          }
          localValue={fixtureDetail.localTeamStatisticAnalysis.passesAccurate}
          visitorValue={
            fixtureDetail.visitorTeamStatisticAnalysis.passesAccurate
          }
        />
        <FixtureDetailStatsItem
          label={
            <FormattedMessage id="passes.ballSafe" defaultMessage="Ball Safe" />
          }
          localValue={fixtureDetail.localTeamStatisticAnalysis.ballSafe}
          visitorValue={fixtureDetail.visitorTeamStatisticAnalysis.ballSafe}
        />

        <FixtureDetailStatsItem
          label={
            <FormattedMessage id="passes.attacks" defaultMessage="Attacks" />
          }
          localValue={fixtureDetail.localTeamStatisticAnalysis.attacksAttacks}
          visitorValue={
            fixtureDetail.visitorTeamStatisticAnalysis.attacksAttacks
          }
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
          localValue={fixtureDetail.localTeamStatisticAnalysis.substitutions}
          visitorValue={
            fixtureDetail.visitorTeamStatisticAnalysis.substitutions
          }
        />
        <FixtureDetailStatsItem
          label={
            <FormattedMessage
              id="discipline.yellowCards"
              defaultMessage="Yellow Cards"
            />
          }
          localValue={fixtureDetail.localTeamStatisticAnalysis.yellowCards}
          visitorValue={fixtureDetail.visitorTeamStatisticAnalysis.yellowCards}
        />
        <FixtureDetailStatsItem
          label={
            <FormattedMessage
              id="discipline.redCards"
              defaultMessage="Red Cards"
            />
          }
          localValue={fixtureDetail.localTeamStatisticAnalysis.redCards}
          visitorValue={fixtureDetail.visitorTeamStatisticAnalysis.redCards}
        />

        <FixtureDetailStatsItem
          label={
            <FormattedMessage
              id="discipline.offsides"
              defaultMessage="Offsides"
            />
          }
          localValue={fixtureDetail.localTeamStatisticAnalysis.offsides}
          visitorValue={fixtureDetail.visitorTeamStatisticAnalysis.offsides}
        />

        <FixtureDetailStatsItem
          label={
            <FormattedMessage id="discipline.fouls" defaultMessage="Fouls" />
          }
          localValue={fixtureDetail.localTeamStatisticAnalysis.fouls}
          visitorValue={fixtureDetail.visitorTeamStatisticAnalysis.fouls}
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
          localValue={fixtureDetail.localTeamStatisticAnalysis.freeKick}
          visitorValue={fixtureDetail.visitorTeamStatisticAnalysis.freeKick}
        />

        <FixtureDetailStatsItem
          label={
            <FormattedMessage id="freekick.corner" defaultMessage="Corner" />
          }
          localValue={fixtureDetail.localTeamStatisticAnalysis.corners}
          visitorValue={fixtureDetail.visitorTeamStatisticAnalysis.corners}
        />
        <FixtureDetailStatsItem
          label={
            <FormattedMessage id="freekick.touch" defaultMessage="Touch" />
          }
          localValue={fixtureDetail.localTeamStatisticAnalysis.throwIn}
          visitorValue={fixtureDetail.visitorTeamStatisticAnalysis.throwIn}
        />
      </React.Fragment>
    ) : null;
  }
}
export default FixtureDetailStatsAnalysis;
