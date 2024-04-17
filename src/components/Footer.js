import "./FooterStyles.css";

import React from "react";

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left"></div>
                <div className="location">
                    <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                    <div>
                        <p>San Antonio</p>
                        <p>Texas</p>
                    </div>
                    </div>

                    <div className="phone">
                        <h4> <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                    206.694.9738</h4>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                    cortesporcz@gmail.com</h4> 
                    </div>
               </div>

            <div className="right">
                <h4>About my work</h4>
                <p>Information Specialist, Librarian, Archvist and Data Scientist</p>
                <div className="social">
                    <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
                    <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
                    <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
                    </div>
            </div>
        </div>
    
    </div>
  );
};

export default Footer;