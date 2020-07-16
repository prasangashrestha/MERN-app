import React from "react";

import "./PlaceList.css";
import Card from "../../shared/components/UIElements/Card";
import {Link} from "react-router-dom";
import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className='place-list center'>
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className='place-list'>
      {props.items.map((place) => (
        <PlaceItem key={place.id} {...place} />
      ))}
    </ul>
  );
};

export default PlaceList;
