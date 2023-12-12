import React, { Component } from "react";
import defaultBcg from "../images/defaultBcg.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link, useParams } from "react-router-dom"; // useParams does not work here as this is a class based component.
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    /* const testStr = "http://localhost:3000/rooms/double-deluxe";
    const Temresult = testStr.split("rooms/");
    const result = Temresult[1];
    console.log(result); */
    const url = window.location.pathname; // geting current location of the webpage via js build-in window.location object
    const splitarray = url.split("rooms/"); // will divide the str to ['https.../rooms/','slug']
    const slug = splitarray[1];
    // console.log(slug);

    // console.log(this.props.match.params.slug); ❌ uses hooks so can be used in functional component
    /* const params = useParams(); ❌
    console.log(params);  ❌*/
    this.state = {
      slug: slug,
      defaultBcg,
    };
  }

  componentDidMount() {} // this can be used while catching data from external api

  // using static way -- assigning context to this component
  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    // console.log(room);

    // if the url does not link to any room then
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to={"/rooms"} className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }

    //if url lead to actual room then destructure
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;

    return (
      <StyledHero img={images[0] || defaultBcg}>
        <Banner title={`${name} room `}>
          <Link to={"/rooms"} className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
    );
  }
}
