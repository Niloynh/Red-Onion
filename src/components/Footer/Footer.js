import React from 'react';
import logo1 from '../../images/logo.png';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer-container mt-5 py-5">
            <div className="row">
                <div className="col-lg-3">
                    <img className=" p-5" src={logo1} alt="" />
                </div>
                <div className="col-lg-3">
                </div>
                <div className="col-lg-3 text-white p-5">
                    <p>About Online Food</p>
                    <p>Read our blog</p>
                    <p>Sign up to deliver</p>
                    <p>Add your Restaurant</p>
                </div>
                <div className="col-lg-3 text-white p-5">
                    <p>Get help</p>
                    <p>Read FAQs</p>
                    <p>View all cities</p>
                    <p>Restaurants near me</p>
                </div>
                <hr />
                    <div className="d-flex my-3 mx-5">
                        <div className="text-light copyright">
                            Copyright @ 2021 Online food
                        </div>
                        <div className="text-white d-flex mx-5 fw-bold my-class">
                            <p className="mx-5">Privacy Policy.</p>
                            <p className="mx-5">Terms of USe</p>
                            <p className="mx-5">Pricing</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Footer;