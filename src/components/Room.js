import React from "react";
import { Link } from "react-router-dom";
import DefaultImage from "../images/room-1.jpeg";
//checking if the props have been passed or not
import PropTypes from "prop-types";

export default function Room({ room }) {
  // console.log(room);

  const { name, slug, images, price } = room; // destructering the room
  // console.log(name);

  return (
    <article className="room">
      <div className="img-container">
        {/* <img src={images[0]} alt={name} /> */}
        {/* adding a dafault image in case the image can not be found */}
        <img src={images[0] || DefaultImage} alt={name} />
        {/* using the OR = || operator  */}
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

Room.propTypes = {
  // as the properties are inside another object room, hence
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
