import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

class FixtureDetailForm5 extends Component {
  render() {
    const { formDetail } = this.props;

    let last5Form = [];
    let formLoad = [];
    formLoad = [];
    last5Form = formDetail ? formDetail.split("") : null;
    if (last5Form) {
      last5Form.forEach((forms, index) => {
        if (forms === "W") {
          formLoad.push(
            <span
              key={"fixDetailForm_" + index}
              className="badge badge-success mr-1"
            >
              <FormattedMessage id="detail.formWin" defaultMessage="W" />
            </span>
          );
        } else if (forms === "L") {
          formLoad.push(
            <span
              key={"fixDetailForm_" + index}
              className="badge badge-danger mr-1"
            >
              <FormattedMessage id="detail.formLost" defaultMessage="L" />
            </span>
          );
        } else if (forms === "D") {
          formLoad.push(
            <span
              key={"fixDetailForm_" + index}
              className="badge badge-warning mr-1"
            >
              <FormattedMessage id="detail.formDraw" defaultMessage="B" />
            </span>
          );
        }
      });
      return formLoad;
    } else return null;
  }
}
export default FixtureDetailForm5;
