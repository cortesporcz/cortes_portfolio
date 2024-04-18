import "./WorkCardStyles.css";
import React from 'react'
import pro1 from "../assets/project1.jpg";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="project-card">
    <image src={pro1} alt="image" />
    <h2 className="project-title">Project Title</h2>
    <div className="pro-details">This is a p place holder</div>
    <p>Add text here</p>
    <div className="pro-btns">
       <NavLink to="url.com" className="btn">View</NavLink>
        <NavLink to="btn">Source</NavLink>
    </div>
</div>
  );
}

export default WorkCard