import React, { Component } from "react";
import "./App.css";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider } from "../swapi-service-context";
import DummySwapiService from "../../services/dummy-swapi-service";
import {
  PeoplePage,
  PlanetPage,
  StarshipPage,
  LoginPage,
  SecretPage,
} from "../pages";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { StarshipDetails } from "../sw-components";

export default class App extends Component {
  state = {
    showRenderPlanet: true,
    hasError: false,
    swapiService: new SwapiService(),
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      console.log("switch to ", Service.name);
      return {
        swapiService: new Service(),
      };
    });
  };

  render() {
    const { isLoggedIn } = this.state;

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div>
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet updateInterval={12000} />
              <Switch>
                <Route
                  path="/"
                  render={() => <h2>Welcome to Star-Wars database</h2>}
                  exact
                />
                      <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/people" render={() => <h2>People</h2>} />
          

                <Route path="/planets" component={PlanetPage} />

                <Route exact path="/starships" component={StarshipPage} />
                <Route
                  path="/starships/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    console.log(match);
                    return <StarshipDetails itemId={id} />;
                  }}
                />
                <Route
                  path="/login"
                  render={() => {
                    return (
                      <LoginPage
                        onLogin={this.onLogin}
                        isLoggedIn={isLoggedIn}
                      />
                    );
                  }}
                />
                <Route
                  path="/secret"
                  render={() => {
                    return <SecretPage isLoggedIn={isLoggedIn} />;
                  }}
                />
                {/* <Redirect to='/'/> */}
                <Route
               
                  render={() => {
                    return <h1>Page not found</h1>;
                  }}
                />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
