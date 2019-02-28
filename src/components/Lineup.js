import React, { Component, Image } from "react";

export default class Lineup extends Component {
  state = {
    home: {
      name: "POR",
      module: "4-4-2",
      team: [
        [
          {
            number: 1,
            name: "Patricio"
          }
        ],
        [
          {
            number: 21,
            name: "Soares"
          },
          {
            number: 3,
            name: "Pepe"
          },
          {
            number: 6,
            name: "Fonte"
          },
          {
            number: 5,
            name: "Guerriero"
          }
        ],
        [
          {
            number: 14,
            name: "Calvalho"
          },
          {
            number: 8,
            name: "Mountinho"
          },
          {
            number: 11,
            name: "Silva"
          },
          {
            number: 17,
            name: "Guedes"
          }
        ],
        [
          {
            number: 16,
            name: "Fernandes"
          },
          {
            number: 7,
            name: "Cristiano Ronaldo"
          }
        ]
      ],
      home_team_events: [
        {
          id: 203,
          type_of_event: "red-card",
          player: "Silva",
          time: "3'"
        },
        {
          id: 210,
          type_of_event: "yellow-card",
          player: "Fernandes",
          time: "64'"
        },
        {
          id: 210,
          type_of_event: "yellow-card",
          player: "Fonte",
          time: "64'"
        },
        {
          id: 206,
          type_of_event: "substitution-in",
          player: "Fonte",
          time: "31'"
        }
      ]
    },

    away: {
      name: "SPA",
      module: "4-2-3-1",
      team: [
        [
          {
            number: 1,
            name: "De Gea"
          }
        ],
        [
          {
            number: 18,
            name: "Alba"
          },
          {
            number: 15,
            name: "Ramos"
          },
          {
            number: 3,
            name: "Pique"
          },
          {
            number: 4,
            name: "Nacho"
          }
        ],
        [
          {
            number: 8,
            name: "Koke"
          },
          {
            number: 5,
            name: "Busquets"
          }
        ],
        [
          {
            number: 6,
            name: "Iniesta"
          },
          {
            number: 22,
            name: "Isco"
          },
          {
            number: 21,
            name: "Silva"
          }
        ],
        [
          {
            number: 19,
            name: "Costa"
          }
        ]
      ],
      away_team_events: [
        {
          id: 210,
          type_of_event: "yellow-card",
          player: "De Gea",
          time: "12'"
        },
        {
          id: 206,
          type_of_event: "substitution-in",
          player: "Iniesta",
          time: "31'"
        },
        {
          id: 206,
          type_of_event: "substitution-in",
          player: "Costa",
          time: "32'"
        },
        {
          id: 206,
          type_of_event: "red-card",
          player: "Silva",
          time: "31'"
        }
      ]
    }
  };

  render() {
    return (
      <div
        style={{
          flex: 1,
          padding: 35,
          borderColor: "#fff",
          backgroundColor: "#000"
        }}
      >
        <div
          style={{
            backgroundImage: `url("./img/bg/footballfield.png")`,
            backgroundRepeat: "no-repeat",
            width: "372px",
            height: "594px",
            flex: 1
          }}
        >
          <div style={{ backgroundColor: "rgba(52, 52, 52, 0.45)", flex: 1 }}>
            <div
              style={{
                flex: 1,
                backgroundColor: "rgba(204, 70, 43, 0)"
              }}
            >
              <div
                style={{
                  flexDirection: "row"
                }}
              >
                <span
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#fff",
                    textShadowColor: "rgba(0, 0, 0, 0.75)",
                    textShadowOffset: { width: 0, height: 1 },
                    textShadowRadius: 1,
                    fontSize: 15,
                    marginLeft: 20
                  }}
                >
                  {this.state.home.module}
                </span>
                <span
                  style={{
                    position: "absolute",
                    right: 20,
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#fff",
                    textShadowColor: "rgba(0, 0, 0, 0.75)",
                    textShadowOffset: { width: 0, height: 1 },
                    textShadowRadius: 1,
                    fontSize: 15
                  }}
                >
                  {this.state.home.name}
                </span>
              </div>

              {this.state.home.team.map((data, i) => (
                <div style={{ flex: 1, flexDirection: "row" }}>
                  {data.map((d, j) => (
                    <div style={{ flexGrow: 1, alignItems: "center" }}>
                      <div
                        style={{
                          flexDirection: "row"
                        }}
                      >
                        {this.state.home.home_team_events.map(
                          (el, z) =>
                            d.name === el.player &&
                            el.type_of_event === "yellow-card" && (
                              <img
                                src="/img/preodds/yellowcard.png"
                                alt=""
                                style={{
                                  width: 12,
                                  height: 15,
                                  position: "absolute",
                                  left: -12
                                }}
                              />
                            )
                        )}
                        {this.state.home.home_team_events.map(
                          (el, z) =>
                            d.name == el.player &&
                            el.type_of_event == "red-card" && (
                              <img
                                src="./images/card-red.png"
                                alt=""
                                style={{
                                  width: 12,
                                  height: 15,
                                  position: "absolute",
                                  left: -12
                                }}
                              />
                            )
                        )}
                        <div
                          style={{
                            justifyContent: "center",
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            borderWidth: 2,
                            borderColor: "rgb(244, 67, 54)",
                            backgroundColor: "rgba(244, 67, 54,0.5)"
                          }}
                        >
                          <span
                            style={{
                              textAlign: "center",
                              fontWeight: "bold",
                              color: "#fff",
                              textShadowColor: "rgba(0, 0, 0, 0.75)",
                              textShadowOffset: { width: 0, height: 1 },
                              textShadowRadius: 1,
                              fontSize: 15
                            }}
                          >
                            {d.number}
                          </span>
                        </div>
                        {this.state.home.home_team_events.map(
                          (el, z) =>
                            d.name == el.player &&
                            el.type_of_event == "substitution-in" && (
                              <img
                                src="./images/refresh.png"
                                alt=""
                                style={{
                                  width: 12,
                                  height: 12,
                                  position: "absolute",
                                  right: -14
                                }}
                              />
                            )
                        )}
                      </div>
                      <span
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "#fff",
                          textShadowColor: "rgba(0, 0, 0, 0.75)",
                          textShadowOffset: { width: 0, height: 1 },
                          textShadowRadius: 1,
                          fontSize: 15
                        }}
                      >
                        {d.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div
              style={{
                flex: 1,
                backgroundColor: "rgba(43, 99, 204, 0)",
                paddingTop: 55
              }}
            >
              {this.state.away.team.reverse().map((data, i) => (
                <div style={{ flex: 1, flexDirection: "row" }}>
                  {data.map((d, j) => (
                    <div style={{ flexGrow: 1, alignItems: "center" }}>
                      <span
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "#fff",
                          textShadowColor: "rgba(0, 0, 0, 0.75)",
                          textShadowOffset: { width: 0, height: 1 },
                          textShadowRadius: 1,
                          fontSize: 15
                        }}
                      >
                        {d.name}
                      </span>
                      <div
                        style={{
                          flexDirection: "row"
                        }}
                      >
                        {this.state.away.away_team_events.map(
                          (el, z) =>
                            d.name == el.player &&
                            el.type_of_event == "yellow-card" && (
                              <img
                                src="./images/card-yellow.png"
                                alt=""
                                style={{
                                  width: 12,
                                  height: 15,
                                  position: "absolute",
                                  left: -12
                                }}
                              />
                            )
                        )}
                        {this.state.away.away_team_events.map(
                          (el, z) =>
                            d.name == el.player &&
                            el.type_of_event == "red-card" && (
                              <img
                                src="./images/card-red.png"
                                alt=""
                                style={{
                                  width: 12,
                                  height: 15,
                                  position: "absolute",
                                  left: -12
                                }}
                              />
                            )
                        )}
                        <div
                          style={{
                            justifyContent: "center",
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            borderWidth: 2,
                            borderColor: "rgb(3, 169, 244)",
                            backgroundColor: "rgba(3, 169, 244,0.5)"
                          }}
                        >
                          <span
                            style={{
                              textAlign: "center",
                              fontWeight: "bold",
                              color: "#fff",
                              textShadowColor: "rgba(0, 0, 0, 0.75)",
                              textShadowOffset: { width: 0, height: 1 },
                              textShadowRadius: 1,
                              fontSize: 15
                            }}
                          >
                            {d.number}
                          </span>
                        </div>
                        {this.state.away.away_team_events.map(
                          (el, z) =>
                            d.name == el.player &&
                            el.type_of_event == "substitution-in" && (
                              <img
                                source="./images/refresh.png"
                                alt=""
                                style={{
                                  width: 12,
                                  height: 12,
                                  position: "absolute",
                                  right: -14
                                }}
                              />
                            )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}

              <div
                style={{
                  flexDirection: "row"
                }}
              >
                <span
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#fff",
                    textShadowColor: "rgba(0, 0, 0, 0.75)",
                    textShadowOffset: { width: 0, height: 1 },
                    textShadowRadius: 1,
                    fontSize: 15,
                    marginLeft: 20
                  }}
                >
                  {this.state.away.module}
                </span>
                <span
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#fff",
                    textShadowColor: "rgba(0, 0, 0, 0.75)",
                    textShadowOffset: { width: 0, height: 1 },
                    textShadowRadius: 1,
                    fontSize: 15,
                    position: "absolute",
                    right: 20
                  }}
                >
                  {this.state.away.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
