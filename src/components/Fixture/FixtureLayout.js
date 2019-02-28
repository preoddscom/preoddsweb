import React, { Component } from "react";
import FixtureMain from "./FixtureMain";
class FixtureLayout extends Component {
  state = {
    leagueId: "",
    leagueName: "",
    lang: ""
  };

  componentDidMount() {
    const { lang } = this.props;
    const { leagueId, leagueName } = this.props.match.params; //this.props.location.state;
    this.setState({ leagueId, leagueName, lang });
  }
  componentWillReceiveProps(nextProps) {
    const { lang } = this.props;
    const { leagueId, leagueName } = nextProps.match.params; //nextProps.location.state;
    this.setState({ leagueId, leagueName, lang });
  }
  render() {
    const { leagueId, leagueName, lang } = this.state;
    return leagueId && leagueName ? (
      <FixtureMain leagueId={leagueId} leagueName={leagueName} lang={lang} />
    ) : null;
  }
}

export default FixtureLayout;
