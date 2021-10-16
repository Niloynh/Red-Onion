import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import useAuth from '../../useAuth/useAuth';

const Header = () => {
    const {user, userSignOut} = useAuth();
    return (
        <div className="header-container">
            <div className="logo-img">
                <Link to="/home">
                    <img  src={logo} alt=""  />
                </Link>
            </div>
            <div className="login-css">
                <Link to="/"><FontAwesomeIcon icon={faShoppingCart} /></Link>
                <Link to="/login">Login</Link>
               {user.email && <button onClick={userSignOut} className="regular-btn">Logout</button>}
                <Link to="/register"><button className="regular-btn">Sign Up</button></Link>

            </div>
        </div>
    );
};

export default Header;