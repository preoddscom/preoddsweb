import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import PlayerModal from "../../Modals/PlayerModal";

class TopAssist extends Component {
  state = {
    player: null,
    initialModalState: false
  };

  playerDetail = playerDetail => {
    this.setState({
      initialModalState: true,
      player: playerDetail
    });
  };
  render() {
    const { assistScorerSort } = this.props;

    const { initialModalState, player } = this.state;

    return (
      <React.Fragment>
        {initialModalState ? (
          <PlayerModal initialModalState={initialModalState} player={player} />
        ) : null}
        <div className="card card-info card-outline">
          <div className="card-header">
            <h3 className="card-title">
              <i className="fas fa-futbol" />{" "}
              <FormattedMessage id="top.assist" defaultMessage="Assist" />
            </h3>

            {/*    <div className="card-tools">
              <button type="button" className="btn btn-tool" data-widget="collapse">
                <i className="fa fa-minus" />
              </button>
            </div> */}
          </div>
          <div className="card-body p-0">
            <ul className="products-list product-list-in-card pl-2 pr-2">
              {assistScorerSort && assistScorerSort.length > 0
                ? assistScorerSort.map((assistsScorer, index) => {
                    return (
                      <li
                        key={index}
                        className="item"
                        style={{ cursor: "pointer" }}
                        onClick={this.playerDetail.bind(
                          this,
                          assistsScorer.player
                        )}
                      >
                        <div className="product-img">
                          <img
                            className="img-fluid"
                            src={assistsScorer.player.imagePath}
                            style={{ width: "32px", height: "32px" }}
                            alt="logo"
                          />
                        </div>
                        <div className="product-info">
                          <span className="product-title">
                            {assistsScorer.player.fullName}
                            <span className="badge badge-primary float-right">
                              {assistsScorer.assists}
                            </span>
                          </span>
                          <span className="product-description">
                            <img
                              className="img-fluid"
                              src={assistsScorer.team.logoPath}
                              style={{ width: "16px", height: "16px" }}
                              alt="logo"
                            />{" "}
                            {assistsScorer.team.name}
                          </span>
                        </div>
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TopAssist;
