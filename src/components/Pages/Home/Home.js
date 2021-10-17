import React from 'react';
import FoodStore from '../../Foodmenu/FoodStore';
import LIghtFast from '../../LightFast/LIghtFast';
import WhyChooseUs from '../../WhyChooseUs/WhyChooseUs';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="banner-container ">
                <div className="banner-text">
                        <h1>Best Food Waiting For Your  Belly</h1>
                    <div className="input-field">
                         <input type="text" placeholder="search food items" className="form-control" />
                         <button className="banner-btn">Search</button>
                     </div>
                 </div>
            </div>

            {/* FoodGallery Component */}
               <FoodStore></FoodStore>

               {/* Light Fast Section */}
                <LIghtFast></LIghtFast>

           {/* Why choose us Component */}
           <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;