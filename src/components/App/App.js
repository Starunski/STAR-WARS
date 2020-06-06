import React, { Component } from "react";
import "./App.css";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider } from "../swapi-service-context";

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList,
} from "../sw-components";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRenderPlanet: true,
    hasError: false,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRenderPlanet: !state.showRenderPlanet,
      };
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div>
            <Header />
            <RandomPlanet />

            <PersonDetails itemId={5} />
            <PlanetDetails itemId={4} />
            <StarshipDetails itemId={5} />

            <PersonList />
            <PlanetList />
            <StarshipList />

            {/* <Row left={PersonDetails} right={StarshipDetails} /> */}
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
