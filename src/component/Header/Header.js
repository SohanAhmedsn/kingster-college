import React from "react";
import { NavLink } from "react-router-dom";
import Banner from "../Banner/Banner";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header-nav">
        <NavLink
          className="navLink"
          to="/home"
          style={(isActive) => ({
            color: isActive ? "red" : "white",
          })}
        >
          HOME
        </NavLink>
        <NavLink
          className="navLink"
          to="/Acacemics"
          style={(isActive) => ({
            color: isActive ? "red" : "white",
          })}
        >
          ACADEMICS
        </NavLink>
        <NavLink
          className="navLink"
          to="/courses"
          style={(isActive) => ({
            color: isActive ? "red" : "white",
          })}
        >
          COURSES
        </NavLink>
        <NavLink
          className="navLink"
          to="/admission"
          style={(isActive) => ({
            color: isActive ? "red" : "white",
          })}
        >
          ADMISSION
        </NavLink>
        <NavLink
          className="navLink"
          to="/blog"
          style={(isActive) => ({
            color: isActive ? "red" : "white",
          })}
        >
          BLOGS
        </NavLink>
        <NavLink
          className="navLink"
          to="/found"
          style={(isActive) => ({
            color: isActive ? "red" : "white",
          })}
        >
          NaN
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
