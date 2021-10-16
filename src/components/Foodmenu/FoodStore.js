import React, { useState } from 'react';
import Menu from "./menu";
import './FoodStore.css';
import { Link } from 'react-router-dom';

const FoodStore = () => {
    const [items, setItems] = useState(Menu);

    const filterItem = (categItem) =>{
        const updatedItems = Menu.filter((curElem) =>{
            return curElem.category === categItem
        });
        setItems(updatedItems)
    }
    return (
        <>
            <div className="mt-5 text-center container">
                <div className="d-flex justify-content-evenly">
                    <button onClick={() => filterItem('breakfast')} className="foodstore-btn">Breakfast</button>
                    <button onClick={() => filterItem('Lunch')} className="foodstore-btn">Lunch</button>
                    <button onClick={() => filterItem('dinner')} className="foodstore-btn">Dinner</button>
                    {/* <button onClick={() => setItems(Menu)} className="foodstore-btn">All</button> */}
                </div>
            </div>

            {/* My main items section */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row">
                            {
                                items.map((elem) => {
                                    const {id, name,image, description, price} = elem;

                                    return (
                                        <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                                        
                                          <div class="card card-container">
                                            <img src={image} class="img-fluid" alt="..." />
                                            <div class="card-body card-style">
                                                <h5>{name}</h5>
                                                <p>{description}</p>
                                                <h6 class="card-text">${price}</h6>
                                                <Link to={`/details/${id}`}>
                                                    <button  className="banner-btn mt-2">View Details</button>
                                                </Link>
                                            </div>
                                            </div>
                                    </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
                <button className="check-btn banner-btn my-5">Checkout Your Food</button>
            </div>
        </>
    );
};

export default FoodStore;