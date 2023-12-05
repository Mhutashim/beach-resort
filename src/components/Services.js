import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  //info about services available
  //each data set represent a article html element
  state = {
    services: [
      {
        icon: <FaCocktail></FaCocktail>,
        title: "free Cocktails",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, tempore!",
      },
      {
        icon: <FaHiking></FaHiking>,
        title: "End less hiking",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, tempore!",
      },
      {
        icon: <FaShuttleVan></FaShuttleVan>,
        title: "Free Shuttle",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, tempore!",
      },
      {
        icon: <FaBeer></FaBeer>,
        title: "Strongest Beer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, tempore!",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}
