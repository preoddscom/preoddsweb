import React, { Component } from "react";
import Live from "./Live";
import Tips from "../Coupon/Tips";
import moment from "moment";
import LeaguesMenu from "../League/LeaguesMenu";

class LiveLayout extends Component {
  state = {
    dateToday: moment(new Date()).format("YYYY-MM-DD")
  };

  render() {
    return (
      <div className="row">
        <div className="col-lg-4">
          <Tips lang={this.props.lang} />
        </div>

        <Live lang={this.props.lang} goalSound={this.props.goalSound} />

        <div className="col-lg-3">
          <LeaguesMenu lang={this.props.lang} />
        </div>
      </div>
    );
  }
}

export default LiveLayout;
