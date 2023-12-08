import React, { Component } from "react";

//context declaration
const RoomContext = React.createContext();

//here we have used class based component so that we can use state for flexibility

class RoomProvider extends Component {
  state = {
    greeting: "hello!",
    name: "Nayeem",
  };
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
