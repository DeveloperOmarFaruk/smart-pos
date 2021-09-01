import React from "react";
import "./AfterNavbar.css";
import { NavLink } from "react-router-dom";

const AfterNavbar = () => {
  const style = {
    borderBottom: "3px solid var(--Yellow)",
    color: "var(--Black)",
    fontWeight: "bold",
    padding: "0px 5px 5px 5px",
  };
  return (
    <>
      <div className="after-navbar-section">
        <div className="after-navbar-left">
          <h1>Dashboard</h1>
        </div>

        <div className="after-navbar-right">
          <ul>
            <li className="after-nav-items">
              <NavLink
                to="/yesterday"
                className="after-navbar-links"
                activeStyle={style}
              >
                Yesterday
              </NavLink>
            </li>

            <li className="after-nav-items">
              <NavLink
                to="/today"
                className="after-navbar-links"
                activeStyle={style}
              >
                Today
              </NavLink>
            </li>

            <li className="after-nav-items">
              <NavLink
                to="/week"
                className="after-navbar-links"
                activeStyle={style}
              >
                Week
              </NavLink>
            </li>

            <li className="after-nav-items">
              <NavLink
                to="/month"
                className="after-navbar-links"
                activeStyle={style}
              >
                Month
              </NavLink>
            </li>

            <li className="after-nav-items">
              <NavLink
                to="/year"
                className="after-navbar-links"
                activeStyle={style}
              >
                Year
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AfterNavbar;
