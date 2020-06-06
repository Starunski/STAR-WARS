import React, { Component } from "react";
import "./random-planet.css";
import SwapiServise from "../../services/swapi-service";
import Spiner from "../spiner";
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends Component {
  swapiServise = new SwapiServise();

  state = {
    planet: {},
    loading: true,
    error: false,
  };


 
  componentDidMount(){
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 7700);
  
  }

  componentWillUnmount(){
     clearInterval(this.interval)
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false,
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updatePlanet = () => {
    console.log ('Update')
    const id = Math.floor(Math.random() * 20) + 3;
    this.swapiServise
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    console.log('render')
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spiner = loading ? <Spiner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    if (loading) {
      return <Spiner />;
    }

    return (
      <div className="random-planet">
        {errorMessage}
        {spiner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <div className="card">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          className="card-img-top planet-image"
        ></img>

        <div className="card-body">
          <h5 className="card-title">Name : {name}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Population : {population} </li>
            <li className="list-group-item">RotationPeriod : {rotationPeriod} </li>
            <li className="list-group-item">Diameter : {diameter} </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
