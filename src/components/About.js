import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className='about-container'>
                <div className='row'>
                    <div className='about-header'>
                        <h1 className='about-header-text'>About Team GP</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='about-content'>
                        <h2 className ='about-content-text'>Team GP (Gon Pack) is a South Korean team owned by GonFactory, which was announced on March 23, 2020.</h2>
                    </div>
                </div>
            </div>
        );
    };
};

export default About;