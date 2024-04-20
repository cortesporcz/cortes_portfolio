import "./WorkCardStyles.css";
import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
    <image src={props.imgsrc} alt="image" />
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
    <p>{props.text}</p>
    <div className="pro-btns">
       <NavLink to="url.com" className="btn">View</NavLink>
        <NavLink to="btn">{props.view}</NavLink>
    </div>
</div>
</div>
  );
}

export default WorkCard