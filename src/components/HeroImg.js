import "./HeroImgStyles.css";

import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"

const HeroImg = () => {
  return <div className="hero">
        <div className="mask">
           <img className="intro-img" src={IntroImg} alt="IntroImg" /> 
        </div>  
        <div className="content">
            <p>Hi, I'm Angelina M. Cortes</p>
            <h1>Developer and Librarian</h1>
        </div>
    </div> ; 
}

export default HeroImg