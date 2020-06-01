import React, { Component } from "react";
import "./App.css";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetail from "../person-detail";

export default class App extends Component {
    state = {
        showRenderPlanet:true,
        selectedPerson: 1
    }


onPersonSelected = (id) => {
    this.setState({
        selectedPerson: id
    })
}

  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected = {this.onPersonSelected}/>
          </div>
          <div className="col-md-6">
            <PersonDetail  personId = {this.state.selectedPerson}/>
          </div>
        </div>
      </div>
    );
  }
}

