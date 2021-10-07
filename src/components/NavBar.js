import React, { Component } from 'react';
import Logo from '../images/teamgp-logo.png';

class NavBar extends Component{
    render() {
        return (
            <div class='navbar-container'>
                <div class='logo-container'>
                    <img src={Logo} alt='teamgp-logo' class='nav-logo'></img>
                </div>
                <div class='nav-option-row'>
                    <div class='nav-button'>
                        <h2 class='home'>home</h2>
                    </div>
                    <div class='nav-button'>
                        <h2 class='teams'>teams</h2>
                    </div>
                    <div class='nav-button'>
                        <h2 class='creators'>creators</h2>
                    </div>
                    <div class='nav-button'>
                        <h2 class='partners'>partners</h2>
                    </div>
                </div>
            </div>
        );
    };
};

export default NavBar;