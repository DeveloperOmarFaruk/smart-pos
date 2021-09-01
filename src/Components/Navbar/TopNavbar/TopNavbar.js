import React from 'react'
import './TopNavbar.css'

const TopNavbar = () => {
    return (
        <>
            <div className="top-navbar-section">
                <div className="top-navbar-left">
                <i className="fas fa-long-arrow-alt-left"/>
                <p className="dash"> Dashboard</p>
                <i className="fas fa-chevron-right"/>
                <p className="sales">  Sales statistics</p>
                </div>

                <div className="top-navbar-right">
                <div className="notification">
                <i className="far fa-bell"> <span>1</span></i>
                </div>
                <i className="far fa-clock"/>

                <div class="search-box">
    <i className="fas fa-search"></i>
    <input type="text" class="input-search" placeholder="Search..."/>
  </div>
                </div>
            </div>
        </>
    )
}

export default TopNavbar
