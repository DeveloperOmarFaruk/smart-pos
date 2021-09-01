import React from "react";
import "./Employees.css";
import Logo from "../../Images/art-Tutul.jpg";
import Alice from "../../Images/alice.jpg";
import Tim from "../../Images/tim.jpg";
import Jason from "../../Images/json.jpg";

const Employees = () => {
  return (
    <>
      <div className="employees-section">
        <div className="employee-title">
          <h3>Best employees</h3>
          <select id="cars" name="carlist" form="carform" className="select">
            <option value="volvo">Today</option>
            <option value="saab">Yesterday</option>
            <option value="opel">Week</option>
            <option value="audi">Month</option>
            <option value="audi">Year</option>
          </select>
        </div>

        <div className="employee-sub-title">
          <p>Employee</p>
          <p>Earnings</p>
        </div>

        <div className="employee-details">
          <div className="employee-details-left">
            <img src={Logo} alt="employee_dishes_employee_pic" />
            <div className="employee-details-left-name">
              <h3>Theresa Webb</h3>
              <p>Waiter</p>
            </div>
          </div>

          <div className="employee-details-right">
            <p>$ 23,700</p>
          </div>
        </div>

        <div className="employee-details">
          <div className="employee-details-left">
            <img src={Alice} alt="employee_dishes_employee_pic" />
            <div className="employee-details-left-name">
              <h3>Alice Flores</h3>
              <p>Waiter</p>
            </div>
          </div>

          <div className="employee-details-right">
            <p>$ 21,389</p>
          </div>
        </div>

        <div className="employee-details">
          <div className="employee-details-left">
            <img src={Tim} alt="employee_dishes_employee_pic" />
            <div className="employee-details-left-name">
              <h3>Tim Handerson</h3>
              <p>Manager</p>
            </div>
          </div>

          <div className="employee-details-right">
            <p>$ 15,622</p>
          </div>
        </div>

        <div className="employee-details">
          <div className="employee-details-left">
            <img src={Jason} alt="employee_dishes_employee_pic" />
            <div className="employee-details-left-name">
              <h3>Jason Collins</h3>
              <p>Courier</p>
            </div>
          </div>

          <div className="employee-details-right">
            <p>$ 14,121</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employees;
