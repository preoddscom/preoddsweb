import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollUpButton from "react-scroll-up-button";
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import tr from "react-intl/locale-data/tr";
import de from "react-intl/locale-data/de";
import { IntlProvider } from "react-intl";
import languages from "./langi18n/Languages";
import { Provider, Consumer } from "./contextAPI/context";
import Navbar from "./components/layout/Navbar";
import Navbarsub from "./components/layout/NavbarSub";
import FixtureDetail from "./components/FixtureDetail/FixtureDetail";
import "./App.css";
import LiveLayout from "./components/Live/LiveLayout";
import Footer from "./components/layout/Footer";
import Contact from "./components/General/Contact";
import Faq from "./components/General/Faq";
import FixtureLayout from "./components/Fixture/FixtureLayout";
import ScrollToTop from "react-router-scroll-top";
import NotFound from "./components/General/NotFound";
import Privacy from "./components/General/Privacy";
import HotOdds from "./components/OddsAnalysis/HotOdds";
import WinningOdds from "./components/OddsAnalysis/WinningOdds";
import ProfitOdds from "./components/OddsAnalysis/ProfitOdds";

addLocaleData(en);
addLocaleData(tr);
addLocaleData(de);

class App extends Component {
  render() {
    return (
      <Provider>
        <Consumer>
          {value => {
            const { language, lang, goalSound } = value;
            return (
              <IntlProvider locale={language} messages={languages[language]}>
                <Router basename={process.env.REACT_APP_ROUTER_BASE || ""}>
                  <React.Fragment>
                    <div className="App">
                      <ScrollUpButton />
                      <Navbar lang={lang} goalSound={goalSound} />
                      <Navbarsub lang={lang} />
                      <div className="row">
                        <div className="col">
                          <div className="container" id="main-container">
                            <ScrollToTop>
                              <Switch>
                                <Route
                                  exact
                                  path="/"
                                  component={() => (
                                    <LiveLayout
                                      lang={lang}
                                      goalSound={goalSound}
                                    />
                                  )}
                                />
                                <Route
                                  exact
                                  path="/live"
                                  component={() => (
                                    <LiveLayout
                                      lang={lang}
                                      goalSound={goalSound}
                                    />
                                  )}
                                />
                                <Route
                                  exact
                                  path="/fixtureLayout/:leagueId/:leagueName"
                                  component={props => (
                                    <FixtureLayout lang={lang} {...props} />
                                  )}
                                />
                                <Route
                                  exact
                                  path="/fixtureDetail"
                                  component={FixtureDetail}
                                />
                                <Route
                                  exact
                                  path="/privacy"
                                  component={Privacy}
                                />
                                <Route
                                  exact
                                  path="/contact"
                                  component={() => <Contact lang={lang} />}
                                />

                                <Route
                                  exact
                                  path="/hotOdds"
                                  component={() => <HotOdds lang={lang} />}
                                />

                                <Route
                                  exact
                                  path="/winningOdds"
                                  component={() => <WinningOdds lang={lang} />}
                                />

                                <Route
                                  exact
                                  path="/profitOdds"
                                  component={() => <ProfitOdds lang={lang} />}
                                />

                                <Route exact path="/faq" component={Faq} />

                                <Route component={NotFound} />
                              </Switch>
                            </ScrollToTop>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Footer />
                  </React.Fragment>
                </Router>
              </IntlProvider>
            );
          }}
        </Consumer>
      </Provider>
    );
  }
}

export default App;
