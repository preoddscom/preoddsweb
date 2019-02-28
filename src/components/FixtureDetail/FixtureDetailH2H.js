import React, { Component } from "react";
import FixtureItemH2H from "./FixtureItemH2H";
import { FormattedMessage } from "react-intl";

class FixtureDetailH2H extends Component {
  render() {
    const { fixtureMatches } = this.props;
    return (
      <div>
        {fixtureMatches && fixtureMatches.length > 0 ? (
          fixtureMatches.map(fixtureItem => {
            return (
              <FixtureItemH2H fixtureItem={fixtureItem} key={fixtureItem.id} />
            );
          })
        ) : (
          <span>
            <FormattedMessage
              id="detail.nomatches"
              defaultMessage="No matches found"
            />
          </span>
        )}
      </div>
    );
  }
}
export default FixtureDetailH2H;
