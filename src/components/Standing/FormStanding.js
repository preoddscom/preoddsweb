import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

export default class FormStanding extends Component {
  render() {
    const { standing } = this.props;
    let last5Form = [];
    let formLoad = [];
    formLoad = [];
    last5Form = standing.standingsRecentForm.split("");

    last5Form.forEach((forms, index) => {
      if (forms === "W") {
        formLoad.push(
          <span
            key={"form_".concat(index)}
            style={{ width: "15%" }}
            className="badge badge-success"
          >
            <FormattedMessage id="detail.formWin" defaultMessage="W" />
          </span>
        );
        formLoad.push(<span key={index}> </span>);
      } else if (forms === "L") {
        formLoad.push(
          <span
            key={"form_".concat(index)}
            style={{ width: "15%" }}
            className="badge badge-danger"
          >
            <FormattedMessage id="detail.formLost" defaultMessage="L" />
          </span>
        );
        formLoad.push(<span key={index}> </span>);
      } else if (forms === "D") {
        formLoad.push(
          <span
            key={"form_".concat(index)}
            style={{ width: "15%" }}
            className="badge badge-warning"
          >
            <FormattedMessage id="detail.formDraw" defaultMessage="D" />
          </span>
        );
        formLoad.push(<span key={index}> </span>);
      }
    });
    return formLoad;
  }
}
