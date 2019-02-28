import React, { Component } from "react";

const Context = React.createContext();

let defaultLang =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage;

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LANG":
      return {
        ...state,
        language: action.payload,
        lang: action.payload === "tr" ? "tr-TR" : "en-US"
      };
    case "GOAL_SOUND":
      return {
        ...state,
        goalSound: action.payload
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    lang: defaultLang.substring(0, 2) === "tr" ? "tr-TR" : "en-US",
    language: defaultLang.substring(0, 2) === "tr" ? "tr" : "en",
    goalSound: true,
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
