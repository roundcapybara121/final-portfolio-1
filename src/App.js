import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import workData from "./assets/work-data.json";
import WorkItem from "./components/workItem.js"
import { NavLink } from 'react-router-dom';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
workData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [projectGrid, setprojectGrid] = useState(workData);

  const logo = process.env.PUBLIC_URL + "/" + "images/capybara-icon.png";

  return (
    <div className="App">
      <head>

      </head>


      {/* <h1>Final Portfolio</h1> TODO: personalize your bakery (if you want) */}
      <div className="container">

        <div className="intro-section">
          {/* moved navbar section inside so the background could be behind it */}
          <nav className="navbar">
            <div>
              <img className="logo" src={logo}></img>
            </div>
            <div>
              <ul className="nav-list">
                <li>
                  {/* <a className="nav-item" href="https://calendar.google.com/calendar/u/0/r/week">HOME</a> */}
                  <NavLink to="/test.js"></NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <div className="intro-text-container">
            <div className="intro-text">
              <h1 className="intro-h1">Hi, I'm roundCapybara121</h1>
              <h3 className="inro-h3">I am currently studying UI/UX @ Brown</h3>
              <h3 className="intro-h3">Read more about my journey below!</h3>
            </div>

          </div>
        </div>

        <div className="work-section">
          <h1 className="work-title">Featured Works</h1>
          <div className="content-wrapper">
            <div className="content">
              {projectGrid.map((item, index) => (
                <WorkItem className="card" image={item.image} name={item.name} description={item.description} />
              ))}
            </div>
          </div>


        </div>

      </div>
    </div>
  );
}
/* 
*/
export default App;
