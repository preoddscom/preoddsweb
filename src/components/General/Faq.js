import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import ReactDOM from "react-dom";
class Faq extends Component {
  componentDidUpdate() {
    const element = ReactDOM.findDOMNode(this);
    if (element != null) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return (
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header bg-secondary" id="headingOne">
            <h5 className="mb-0">
              <button
                style={{
                  textDecoration: "none !important",
                  link: "none",
                  color: "black"
                }}
                className="btn btn-link text-white"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <i className="fas fa-calculator" />{" "}
                <FormattedMessage
                  id="win.header"
                  defaultMessage="Win Percentage"
                  values={{ br: <br /> }}
                />
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              <FormattedMessage
                id="win.percentage"
                defaultMessage="Win Percentage"
                values={{ br: <br /> }}
              />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header  bg-secondary" id="headingTwo">
            <h5 className="mb-0">
              <button
                style={{
                  textDecoration: "none !important",
                  link: "none",
                  color: "black"
                }}
                className="btn btn-link collapsed text-white"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <i className="fas fa-calculator" />{" "}
                <FormattedMessage
                  id="profit.header"
                  defaultMessage="Profit Percentage"
                  values={{ br: <br /> }}
                />
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              {" "}
              <FormattedMessage
                id="profit.loose"
                defaultMessage="Profit"
                values={{ br: <br /> }}
              />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header  bg-secondary" id="headingThree">
            <h5 className="mb-0">
              <button
                style={{
                  textDecoration: "none !important",
                  link: "none",
                  color: "black"
                }}
                className="btn btn-link collapsed text-white"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <i className="fas fa-calculator" />
                <FormattedMessage
                  id="probability.header"
                  defaultMessage="Probability  Percentage"
                  values={{ br: <br /> }}
                />
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              <FormattedMessage
                id="probability"
                defaultMessage="Probability"
                values={{ br: <br /> }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
