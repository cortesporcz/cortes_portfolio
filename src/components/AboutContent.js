import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import React from 'react'

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
        </div>
    </div>
  )
}

export default AboutContent