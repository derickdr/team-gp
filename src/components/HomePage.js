import React, { Component } from 'react';
import About from './About';

class HomePage extends Component {
    render() {
        return (
            <div className='home-container'>
                <About />
            </div>
        );
    };
};

export default HomePage;