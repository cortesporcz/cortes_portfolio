import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from "react";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
        <h1>More about me</h1>
        <p>I'm a librarian, educator & new web-developer hoping to collaborate to create inclusive apps for libraries and schools.</p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top" alt="true" />
                <img src={React1} className="img" alt="true" />
        </div>
            <div className="img-stack bottom">
                <img src={React2} className="img" alt="true" />
        </div>
        </div>
    </div>
  )
}

export default AboutContent