import React, { Component } from "react";
import "./random-planet.css";
import SwapiServise from "../../services/swapi-service";
import Spiner from "../spiner";
import ErrorIndicator from "../error-indicator";
import propTypes  from 'prop-types'

export default class RandomPlanet extends Component {
  swapiServise = new SwapiServise();


  static defaultProps = {
    updateInterval: 10000
  }

  static propTypes = {
    updatePlanet: propTypes.number
    // (props,propName, componentName)=> {
    //   const value = props[propName];
    //   if(typeof value === 'number' && !isNaN(value)){
    //     return null
    //   }
    // return new TypeError(`${componentName}: ${propName} must be number`)
    // }

  }

  state = {
    planet: {},
    loading: true,
    error: false,
  };
 

 
  componentDidMount(){
    const {updateInterval} = this.props
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  
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
// RandomPlanet.defaultProps = {     
//   updateInterval: 10000
// }


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
