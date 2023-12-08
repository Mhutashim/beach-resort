import React, { Component } from "react";
import items from "./data";

//context declaration
const RoomContext = React.createContext();

//here we have used class based component so that we can use state for flexibility

class RoomProvider extends Component {
  state = {
    /* greeting: "hello!",
    name: "Nayeem", */
    rooms: [], //Full room
    sortedRooms: [], // sorted in all rooms
    featuredRooms: [], // featured in homepage section
    loading: true, //while the data is null this will load instead - basically the current state here
  };

  //on of the component lifecycle method
  // it will add the info in to the context after the component is rendered properly
  componentDidMount() {
    let rooms = this.formatData(items); // items is the argument so the name matter
    // console.log(rooms);
    let featuredRooms = rooms.filter((room) => room.featured === true); //filtering featured rooms
    // console.log(featuredRooms);
    this.setState({
      rooms, // as it matches the rooms var in this (componentDidMount) method | same as rooms:rooms
      featuredRooms, // as it matched featuredRooms variable name
      sortedRooms: rooms, // as it did not matched which is why need to assign it properly.
      loading: false,
    });
  }

  //declaring formatData function - just formatting the data
  formatData(items) {
    //here, item is just a parameter the name does not matter
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      // let room = {...item.fields,id,images:images}
      let room = { ...item.fields, id, images }; // in es6 we can write images:images; just |images|
      return room;
    });
    return tempItems;
  }

  render() {
    return (
      // <RoomContext.Provider value={"hello"}>
      // <RoomContext.Provider value={{greeting:this.state.greeting,name:this.state.name}}>
      <RoomContext.Provider value={{ ...this.state }}>
        {/*Copying state properties n giving to the value prop*/}

        {/* Need to render children as it will warp the whole app component */}
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

// old way using context consumer
const RoomConsumer = RoomContext.Consumer;

export { RoomConsumer, RoomProvider, RoomContext };
