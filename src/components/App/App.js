import React from "react";
import "./App.css";
import Header from '../header'
import RandomPlanet from '../random-planet'
import ItemList from '../item-list'
import PersonDetail from '../person-detail'



const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetail />
        </div>
      </div>
    </div>
  );
};

export default App
