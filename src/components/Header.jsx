import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <h1 className="header__title">My Website</h1>
      <nav class="header__nav">
        <ul class="menu">
          <li class="menu__item">Home</li>
          <li class="menu__item menu__item--active">About</li>
          <li class="menu__item">Contact us</li>
        </ul>
      </nav>
    </div>
  );
}
