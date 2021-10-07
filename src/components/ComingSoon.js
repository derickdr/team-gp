import React, { Component } from 'react';
import Logo from '../images/teamgp-logo.png';

class ComingSoon extends Component {
    render() {
        return (
            <div class='coming-soon-container'>
                <div class='coming-soon-header-container'>
                    <h1 class='coming-soon-header'>Coming Soon!</h1>
                </div>
                <div class='coming-soon-content'>
                    <div class='coming-soon-logo-row'>
                        <img class='coming-soon-logo' src={Logo} alt='Team logo'></img>
                    </div>                        
                    <div class='row'><h2 class='coming-soon-date'>Launching: October 15, 2021</h2></div>
                    <div class='row'><h3 class='coming-soon-detail'>Our teams, our partners, creators, and more!</h3></div>
                </div>
            </div>
        );
    };
};

export default ComingSoon;