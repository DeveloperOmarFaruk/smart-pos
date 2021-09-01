import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import ProPic from "../../Images/art-Tutul.jpg";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-section col-3">
        <div className="sidebar-logo">
          <i class="fas fa-store" />
          <h3>
            <span>Smart</span>POS
          </h3>
        </div>

        <ul>
          <li className="sidebar-items">
            <NavLink to="/dashboard" className="sidebar-links">
              <i class="fas fa-columns"></i>
              Dashboard
            </NavLink>
          </li>

          <li className="sidebar-items">
            <NavLink to="/dashboard" className="sidebar-links">
              <i class="fas fa-hamburger"></i>
              Food & Drinks
            </NavLink>
          </li>

          <li className="sidebar-items">
            <NavLink to="/dashboard" className="sidebar-links">
              <i class="fas fa-comments"></i>
              Messages
            </NavLink>
          </li>

          <li className="sidebar-items">
            <NavLink to="/dashboard" className="sidebar-links">
              <i class="fas fa-file-invoice-dollar"></i>
              Bills
            </NavLink>
          </li>

          <li className="sidebar-items">
            <NavLink to="/dashboard" className="sidebar-links">
              <i class="fas fa-sliders-h"></i>
              Settings
            </NavLink>
          </li>

          <h3 className="other">Other</h3>

          <li className="sidebar-items">
            <NavLink to="/dashboard" className="sidebar-links">
              <i class="fas fa-envelope"></i>
              Notifications
              <span className="notification-count">3</span>
            </NavLink>
          </li>

          <li className="sidebar-items">
            <NavLink to="/dashboard" className="sidebar-links">
              <i class="fas fa-headset"></i>
              Support
            </NavLink>
          </li>
        </ul>

        <div className="profile-card">
          <img src={ProPic} alt="Sidebar__profile__picture" />
          <h3 className="profile-title-name">Theresa Webb</h3>
          <h5 className="profile-sub-title-name"> Walter - 4h 56m</h5>
          <button>Open Profile</button>
        </div>

        <footer className="sidebar-footer">&copy; 2020 SmartPOS App</footer>
      </div>
    </>
  );
};

export default Sidebar;
