import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-helpers";

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label=" model " />
      <Record field="length" label=" length " />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage,
  };
};
export default withSwapiService (mapMethodsToProps)(StarshipDetails);
