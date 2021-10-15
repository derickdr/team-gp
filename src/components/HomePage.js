import React, { Component } from 'react';
import Splash from './Splash';
import About from './About';

class HomePage extends Component {
    render() {
        return (
            <div className='home-container'>
            <Splash />
            <About />
            </div>
        );
    };
};

export default HomePage;