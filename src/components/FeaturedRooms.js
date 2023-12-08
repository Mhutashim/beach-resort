import React, { Component } from "react";
import { RoomContext } from "../context";

export default class FeaturedRooms extends Component {
  // using static way -- assigning context to this component
  static contextType = RoomContext;
  render() {
    //const value = this.context; //we can use this.context via static contextType
    // console.log(value);

    // const { name, greeting } = this.context;

    const { featuredRooms, rooms } = this.context;
    console.log(featuredRooms, rooms);

    return (
      <h4>
        {/* Hello From FeaturedRooms -- {greeting}, this is {name} */}
        Hello From FeaturedRooms
      </h4>
    );
  }
}
