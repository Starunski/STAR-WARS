import React, { Component } from "react";
import "./person-detail.css";
import SwapiService from "../../services/swapi-service";

export default class PersonDetail extends Component {
  swapiServise = new SwapiService();

  state = {
    person: null,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps){
    if(this.props.personId !== prevProps.personId){
      this.updatePerson()
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }
    this.swapiServise.getPerson(personId).then((person) => {
      this.setState({ person });
    });
  }

  render() {
    if (!this.state.person) {
      return <span>Select a person from a list</span>;
    }
    const { id, name, gender, birthYear, eyeColor } = this.state.person;

    return (
      <div className="personal-detail">
        <div className="card">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            className="card-img-top personal-image"
          ></img>

          <div className="card-body">
    <h5 className="card-title"> name {name} /  {this.props.personId} </h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Gender: {gender}</li>
              <li class="list-group-item">Date of Birthday: {birthYear}</li>
              <li class="list-group-item">Eye colorred: {eyeColor}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

