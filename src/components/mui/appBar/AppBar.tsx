import React, { useState } from "react";
import "./AppBar.css";

export default function AppBar() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <img
            className="imgLogo"
            src="https://static.tildacdn.com/tild3530-6134-4236-a638-646530363133/47474744-removebg.png"
            alt=""
          />
        </div>

        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">
            &#9776;
          </label>

          <div className="menu">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li className="services">
              <a href="">Services</a>

              <ul className="dropdown">
                <li>
                  <a href="">Dropdown 1 </a>
                </li>
                <li>
                  <a href="">Dropdown 2</a>
                </li>
                <li>
                  <a href="">Dropdown 2</a>
                </li>
                <li>
                  <a href="">Dropdown 3</a>
                </li>
                <li>
                  <a href="">Dropdown 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
