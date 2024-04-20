import "./WorkCardStyles.css";
import React from 'react'
import pro1 from "../assets/project1.jpg";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
    <image src={props.imgsrc} alt="image" />
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">{props.text}</div>
    <p>Add text here</p>
    <div className="pro-btns">
       <NavLink to="url.com" className="btn">View</NavLink>
        <NavLink to="btn">{props.view}</NavLink>
    </div>
</div>
  );
}

export default WorkCard