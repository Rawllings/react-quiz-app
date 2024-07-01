import React from "react";
import logoImage from "../assets/quiz-logo.png";

function Header() {
  return (
    <header>
      <img src={logoImage} alt="React quiz logo" />
      <h1>React Quiz</h1>
    </header>
  );
}

export default Header;
