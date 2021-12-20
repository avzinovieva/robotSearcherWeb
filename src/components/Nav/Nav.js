import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="NavBar">
      <div className="NavBar-container">
        <NavLink exact={true} to={"/"} className="NavBar-logo">
          <span>R S</span>
        </NavLink>

        <div className="NavBar-submenus">
          <NavLink
            exact={true}
            to={"/robots"}
            activeClassName="active"
            className="NavBar-submenus__menu"
          >
            Robots
          </NavLink>
          <NavLink
            to={"/profile"}
            activeClassName="active"
            className="NavBar-submenus__menu"
          >
            Profile
          </NavLink>
          {/*<NavLink
              to={"/rooms"}
              activeClassName="active"
              className="NavBar-submenus__menu"
          >
            Categories and manufacturers
          </NavLink>*/}
        </div>

        <NavLink to={"/"} activeClassName="active" className="NavBar-logo">
          LOG OUT
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
