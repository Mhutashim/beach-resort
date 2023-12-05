import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner"; // it will be child of Hero
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* The default prop is working here in Hero Component*/}
      <Hero>
        <Banner
          title="Luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
    </div>
  );
}
