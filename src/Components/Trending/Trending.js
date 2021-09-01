import React from "react";
import "./Trending.css";

import Burger from "../../Images/burger.jpg";
import Latte from "../../Images/latte.jpg";
import Spicy from "../../Images/spicy.jpg";
import Pasta from "../../Images/pasta.jpg";

const Trending = () => {
  return (
    <>
      <div className="trending-section">
        <div className="trending-title">
          <h3>Trending dishes</h3>
          <select id="cars" name="carlist" form="carform" className="select">
            <option value="volvo">Today</option>
            <option value="saab">Yesterday</option>
            <option value="opel">Week</option>
            <option value="audi">Month</option>
            <option value="audi">Year</option>
          </select>
        </div>

        <div className="trending-sub-title">
          <p>Dishes</p>
          <p>Orders</p>
        </div>

        <div className="trending-details">
          <div className="trending-details-left">
            <img src={Burger} alt="trending_dishes_food_pic" />
            <div className="trending-details-left-name">
              <p>Food</p>
              <h3>Cheeseburger</h3>
            </div>
          </div>

          <div className="trending-details-right">
            <p>519</p>
          </div>
        </div>

        <div className="trending-details">
          <div className="trending-details-left">
            <img src={Latte} alt="trending_dishes_food_pic" />
            <div className="trending-details-left-name">
              <p className="drinks">Drinks</p>
              <h3>Latte</h3>
            </div>
          </div>

          <div className="trending-details-right">
            <p>408</p>
          </div>
        </div>

        <div className="trending-details">
          <div className="trending-details-left">
            <img src={Spicy} alt="trending_dishes_food_pic" />
            <div className="trending-details-left-name">
              <p>Food</p>
              <h3>Spicy Chicken</h3>
            </div>
          </div>

          <div className="trending-details-right">
            <p>314</p>
          </div>
        </div>

        <div className="trending-details">
          <div className="trending-details-left">
            <img src={Pasta} alt="trending_dishes_food_pic" />
            <div className="trending-details-left-name">
              <p>Food</p>
              <h3>Pasta Carbonara</h3>
            </div>
          </div>

          <div className="trending-details-right">
            <p>210</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
