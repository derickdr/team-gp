import React, { Component } from 'react';
import Logo from '../images/teamgp-logo.png';

class ComingSoon extends Component {
    render() {
        return (
            <div className='coming-soon-container'>
                <div className='coming-soon-header-container'>
                    <h1 className='coming-soon-header'>Coming Soon!</h1>
                </div>
                <div className='coming-soon-content'>
                    <div className='coming-soon-logo-row'>
                        <img className='coming-soon-logo' src={Logo} alt='Team logo'></img>
                    </div>                        
                    <div className='row'><h2 className='coming-soon-date'>Launching: October 15, 2021</h2></div>
                    <div className='row'><h3 className='coming-soon-detail'>Our teams, our partners, creators, and more!</h3></div>
                </div>
            </div>
        );
    };
};

export default ComingSoon;