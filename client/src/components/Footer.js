import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


function AppFooter() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Navigation</h2>
                        <Link to='/users'>Users List</Link>
                        <Link to='/cars'>Cars List</Link>
                        <Link to='/carsAvailability'>Cars Availability List</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Create</h2>
                        <Link to='/addUser'>User</Link>
                        <Link to='/addCar'>Car</Link>
                        <Link to='/addCarAvailability'>Cars Availability</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Socials</h2>
                        <Link to='#'>Instagram</Link>
                        <Link to='#'>Facebook</Link>
                        <Link to='#'>Youtube</Link>
                        <Link to='#'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/users' className='social-logo'>
                            SOCAR
                        </Link>
                    </div>
                    <small className='website-rights'>SOCAR © 2022 BY AHMAD ALKHARFAN</small>
                    
                </div>
            </section>
        </div>
    );
}

export default AppFooter;