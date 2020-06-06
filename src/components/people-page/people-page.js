import React, { Component } from "react";
import "./people-page.css";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";
import Row from "../row";





export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: 5,
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {(i) => `${i.name} (${i.birthYear})`}
      </ItemList>

    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedPerson} />
      </ErrorBoundry>
    );

    return (
      
        <Row left={itemList} right={personDetails} />
      
    );
  }
}
