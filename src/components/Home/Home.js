import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className='hero-section d-flex align-items-center justify-content-center'>
        <div className='container color-black'>
            <h1 className='banner-title text-center text-light'>Welcome to <span className="text-color">TO DO</span> List</h1>
            <p className='banner-text '>We'll never walk alone.You can easily update or mange the item list. <br /> Facing any problem feel free to give us any king of feedback.We'll  <br />always there for you and want to hare from you</p>
            <Link className='btn-banner color-yellow me-2' to='/alltasks'>  <span>Go to " To DO List All Tasks"</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg></Link>

        </div>
    </div>
    );
};

export default Home;