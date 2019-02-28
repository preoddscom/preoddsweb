import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

class PlayerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: props.initialModalState
    };

    this.toggle = this.toggle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ modal: nextProps.initialModalState });
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { player } = this.props;
    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="primary"
          backdrop={false}
        >
          <ModalHeader
            toggle={this.toggle}
            className="card-danger card-outline"
          >
            <div className="d-flex align-items-center">
              <div>
                <img
                  className="img-fluid"
                  src={player.imagePath}
                  style={{ width: "36px" }}
                  alt="logo"
                />
              </div>

              <div> {player.fullName}</div>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="card card-default">
              <div className="card-header">
                <h3 className="card-title font-weight-bold">Profile</h3>
              </div>
              <div className="card-body">
                <dl>
                  <dt>Country</dt>
                  <dd>{player.nationality}</dd>
                  <dt />
                  <dt>Birth Date</dt>
                  <dd>{player.birthDate}</dd>
                  <dt />
                  <dt>Height</dt>
                  <dd>{player.height}</dd>
                  <dt />
                  <dt>Weight</dt>
                  <dd>{player.weight}</dd>
                  <dt />
                </dl>
              </div>
            </div>
          </ModalBody>
          {/* <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              OK
            </Button>
          </ModalFooter> */}
        </Modal>
      </div>
    );
  }
}

export default PlayerModal;
