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
    // console.log(images);

    //array destructuring
    //const [mainImg, img1, img2, img3] = images; //index-wise will be assigned

    //array destructuring with spead operator (...) - to auto assign to other array
    const [mainImg, ...remainingImg] = images; // remainingImg will be array
    // console.log(remainingImg);

    console.log(extras);

    return (
      <>
        <StyledHero img={mainImg || defaultBcg}>
          <Banner title={`${name} room `}>
            <Link to={"/rooms"} className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {/* Will show all the images */}
            {/* {images.map((image, index) => (
              <img key={index} src={image} alt={name}></img>
            ))} */}

            {/* will show only the remaing imgs */}
            {remainingImg.map((image, index) => (
              <img key={index} src={image} alt={name}></img>
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              {/* using the &&(AND) operator */}
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((extra, index) => (
              <li key={index}>- {extra}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
