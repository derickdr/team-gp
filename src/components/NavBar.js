import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/teamgp-logo.png';

class NavBar extends Component{
    render() {
        return (
            <div className='navbar-container'>
                <div className='logo-container'>
                    <img src={Logo} alt='teamgp-logo' className='nav-logo'></img>
                </div>
                <div className='nav-option-row'>
                    <div className='nav-button'>
                        <div className='column'>
                            <Link to='/home' className='home'>home</Link>
                        </div>
                    </div>
                    <div className='nav-button'>
                        <div className='column'>
                            <Link to='/teams' className='teams'>teams</Link>
                        </div>
                    </div>
                    <div className='nav-button'>
                        <div className='column'>
                            <Link to='/creators' className='creators'>creators</Link>
                        </div>
                    </div>
                    <div className='nav-button'>
                        <div className='column'>
                            <Link to='/partners' className='partners'>partners</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default NavBar;