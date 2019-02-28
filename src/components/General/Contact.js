import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classnames from "classnames";
import * as Util from "../settings/Util";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    category: 0,
    message: "",
    errors: {}
  };

  componentDidMount() {
    this.mount = false;
  }

  componentWillUnmount() {
    this.mount = false;
  }
  notifyError = msg =>
    toast.error(msg, {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  notifySuccess = msg =>
    toast.success(msg, {
      position: toast.POSITION.BOTTOM_RIGHT
    });

  onTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.sendMessage();
  };

  sendMessage = async () => {
    this.mount = true;
    const { name, email, category, message } = this.state;
    let categoryText = "";

    if (name === "") {
      this.setState({ errors: { name: "Name is required!" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required!" } });
      return;
    }

    if (parseInt(category) === 0) {
      this.setState({ errors: { category: "Category is required!" } });
      return;
    }

    if (message === "") {
      this.setState({ errors: { message: "Message is required!" } });
      return;
    }

    if (parseInt(category) === 1) categoryText = "Leagues";
    else if (parseInt(category) === 2) categoryText = "Live";
    else if (parseInt(category) === 3) categoryText = "Odds";
    else if (parseInt(category) === 4) categoryText = "Analysis";

    try {
      const res = await axios.get(
        `${
          Util.API_URL
        }mail/name=${name}&email=${email}&sub=${categoryText}&mes=${message}&lang=${
          this.props.lang
        }&apiKey=${Util.API_KEY}`,
        {
          headers: { "Access-Control-Allow-Origin": "*" }
        }
      );
      if (res.status === 200) {
        if (this.mount) {
          this.setState({
            name: "",
            email: "",
            message: "",
            category: 0
          });
        }
        this.notifySuccess("Message sent.");
      } else {
        this.notifyError("Message failed! Try again.");
      }
    } catch (error) {
      this.notifyError("Message failed! Try again.");
    }
  };

  render() {
    const { name, email, category, message, errors } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="card rounded-0">
          <div className="card-header p-0">
            <div className="text-center py-2">
              <h3>
                <i className="fas fa-envelope" /> Send Message
              </h3>
              <ToastContainer />
            </div>
          </div>
          <div className="card-body p-3">
            <div className="form-group">
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-user" />
                  </div>
                </div>
                <input
                  onChange={this.onTextChange}
                  value={name}
                  type="text"
                  className={classnames("form-control ", {
                    "is-invalid": errors.name
                  })}
                  id="name"
                  name="name"
                  placeholder="Enter Name..."
                />
                <div className="invalid-feedback">{errors.name}</div>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-envelope " />
                  </div>
                </div>
                <input
                  onChange={this.onTextChange}
                  value={email}
                  type="email"
                  className={classnames("form-control ", {
                    "is-invalid": errors.email
                  })}
                  id="email"
                  name="email"
                  placeholder="Enter Email..."
                />
                <div className="invalid-feedback">{errors.email}</div>
              </div>
            </div>

            <div className="form-group">
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-file-alt " />
                  </div>
                </div>
                <select
                  className={classnames("custom-select ", {
                    "is-invalid": errors.category
                  })}
                  name="category"
                  defaultValue={category}
                  onChange={this.onTextChange}
                >
                  <option selected value="0">
                    Select Category
                  </option>
                  <option value="1">Leagues</option>
                  <option value="2">Live</option>
                  <option value="3">Odds</option>
                  <option value="4">Analysis</option>
                </select>
                <div className="invalid-feedback">{errors.category}</div>
              </div>
            </div>

            <div className="form-group">
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-comment " />
                  </div>
                </div>
                <textarea
                  onChange={this.onTextChange}
                  value={message}
                  name="message"
                  className={classnames("form-control ", {
                    "is-invalid": errors.message
                  })}
                  placeholder="Type message..."
                  rows="5"
                />
                <div className="invalid-feedback">{errors.message}</div>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-info btn-block rounded-0 py-2"
              >
                <i className="fas fa-location-arrow" /> Send
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Contact;
