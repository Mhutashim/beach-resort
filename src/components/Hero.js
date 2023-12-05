import React from "react";

export default function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

//setting up default props for this Hero component
Hero.defaultProps = {
  hero: "defaultHero",
};
