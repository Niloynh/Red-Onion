import React from 'react';
import Image1 from '../../images/Image/adult-blur-blurred-background-687824.png';
import Image2 from '../../images/Image/chef-cook-food-33614.png';
import Image3 from '../../images/Image/architecture-building-city-2047397.png';

import logo1 from '../../images/ICON/Group 204.png';
import logo2 from '../../images/ICON/Group 1133.png';
import logo3 from '../../images/ICON/Group 245.png';
import './WhyChooseUs.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const WhyChooseUs = () => {
    return (
        <div className="container">
            <div className="text-center my-5 w-50 m-auto">
                <h1 className="fw-bold chooseUs">Why <span className="text-danger">Choose</span> Us</h1>
                <p className=" text-center p-text">Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>
            </div>
            <div className="">
               <div className="card-group my-5">
                <div className="card mx-3 card-full">
                    <img src={Image1} className="w-100" alt="..." />
                    <div className="card-body d-flex  mt-3">
                        <div className="logo-container">
                            <img src={logo1} alt="" />
                        </div>
                        <div className="text-container">
                            <h5 className="card-title">Fast Delevery</h5>
                            <p className="card-text">Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</p>
                            
                            <h6 className="seemore-div">See more </h6>
                            <span className="font-icoN"><FontAwesomeIcon icon={faArrowRight} /></span>
                        </div>
                    </div>
                </div>
                <div className="card mx-3 card-full">
                    <img src={Image2} className="w-100" alt="..." />
                    <div className="card-body d-flex mt-3">
                        <div className="logo-container">
                            <img src={logo2} alt="" />
                        </div>
                        <div className="text-container py-3">
                            <h5 className="card-title">Fast Delevery</h5>
                            <p className="card-text">Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</p>
                            <h6 className="seemore-div">See more </h6>
                            <span className="font-icoN"><FontAwesomeIcon icon={faArrowRight} /></span>
                        </div>
                    </div>
                </div>
                <div className="card mx-3 card-full">
                    <img src={Image3} className="w-100" alt="..." />
                    <div className="card-body d-flex  mt-3">
                        <div className="logo-container">
                            <img src={logo3} alt="" />
                        </div>
                        <div className="text-container">
                            <h5 className="card-title">Fast Delevery</h5>
                            <p className="card-text">Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</p>
                            <h6 className="seemore-div">See more </h6>
                            <span className="font-icoN"><FontAwesomeIcon icon={faArrowRight} /></span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;