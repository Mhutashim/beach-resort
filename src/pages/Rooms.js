import React from "react";
import Hero from "../components/Hero";
export const Rooms = () => {
  return (
    <div>
      {/* here the roomsHero prop is overriding the default props */}
      <Hero hero="roomsHero"></Hero>
    </div>
  );
};
