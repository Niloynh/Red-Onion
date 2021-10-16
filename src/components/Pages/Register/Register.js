import React from 'react';
import './Register.css';
import logo1 from '../../../images/logo2.png'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="container register-container mt-3">
            <div className="text-center form-container">
                <img src={logo1} alt=""className="mb-5" />
                <form>
                    <input type="text" name="" id=""placeholder="Name" className="form-control"/>
                    <br />
                    <input  type="email" name="" id=""placeholder="Email" className="form-control"/>
                    <br />
                    <input type="password" name="" id=""placeholder="Password" className="form-control"/>
                    <br />
                    <button className="form-btn form-control">Sign Up</button>
                    <Link to="/login">Already have an account ?</Link>
                </form>
                
            </div>
        </div>
    );
};

export default Register;