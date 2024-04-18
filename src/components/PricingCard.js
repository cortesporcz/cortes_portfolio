import "./PricingCardStyles.css";
import React from "react";
import { Link } from "react-router-dom";

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>Basic</h3>
                <span className="bar"></span>
                <p className="btc">left blank</p>
                <p>left blank</p>
                <p>left blank</p>
                <p>left blank</p>
                <Link to="/contact" className="btn">Left blank</Link>
            </div>
            </div>
             
            <div className="card">
                <h3>Basic</h3>
                <span className="bar"></span>
                <p className="btc">left blank</p>
                <p>left blank</p>
                <p>left blank</p>
                <p>left blank</p>
                <Link to="/contact" className="btn">Left blank</Link>
                </div>
      
            <div className="card">
                <h3>Basic</h3>
                <span className="bar"></span>
                <p className="btc">left blank</p>
                <p>left blank</p>
                <p>left blank</p>
                <p>left blank</p>
                <Link to="/contact" className="btn">Left blank</Link>
            </div>
        </div>
);
}

export default PricingCard