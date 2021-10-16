import React from 'react';
import './LIghtFast.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const LIghtFast = () => {
    return (
        <div className="container">
            <div className="row light-container">
                <div className="col-lg-8 light-text">
                    <h1>Light Breakfast</h1>
                    <p>Gay one the what walk the she. Demesne mention promise you justice arrived way. Amazing foods are or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye</p>
                    <h2>$55</h2>
                    <button className="banner-btn"><FontAwesomeIcon icon={faShoppingCart} /> Add</button>
                </div>
                <div className="col-lg-4 light-img">
                    <img  src="https://i.ibb.co/xGWKsDY/dinner5.png" alt="" />
                </div>
            </div>
        </div>
    );
};


export default LIghtFast;