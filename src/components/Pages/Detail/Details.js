import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const {foodId} = useParams()
    return (
        <div className="App">
            <h1>Food : {foodId}</h1>
            <Link to="/home">
                <button className="banner-btn mt-5">Back</button>
            </Link>
        </div>
    );
};

export default Details;