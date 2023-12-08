import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

export default class FeaturedRooms extends Component {
  // using static way -- assigning context to this component
  static contextType = RoomContext;
  render() {
    //const value = this.context; //we can use this.context via static contextType
    // console.log(value);

    // const { name, greeting } = this.context;

    let { loading, featuredRooms, rooms } = this.context;
    // console.log(featuredRooms, rooms);

    featuredRooms = featuredRooms.map((room) => (
      <Room key={room.id} room={room}></Room>
    ));

    return (
      <section className="featured-rooms">
        <Title title={"Featured Rooms"}></Title>
        <div className="featured-rooms-center">
          {/* <h4> Hello From FeaturedRooms -- {greeting}, this is {name}</h4> */}

          {/* {featuredRooms} */}
          {/* <Loading></Loading> */}

          {/* Checking if the loading is true or not */}
          {loading ? <Loading></Loading> : featuredRooms}
        </div>
      </section>
    );
  }
}
