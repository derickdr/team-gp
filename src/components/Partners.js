import React, { Component } from 'react';
import PCFORMANLogo from '../images/pcforman-logo.png';
import PulsarLogo from '../images/pulsar-logo.png';

class Partners extends Component {
    render() {
        return (
            <div className='partners-container'>
                <div className='row'>
                    <div className='header'>
                        <h1 className='header-text'>Our Partners</h1>
                    </div>
                </div>

                <div className='partner-container'>
                    <div className='row'>
                        <div className='row'>
                            <img className='partner-logo' src={PCFORMANLogo} alt='pcforman logo'></img>
                        </div>
                    </div>
                    <div className='blurb'>
                        <h2>Through PCFORMAN we are able to build competitive equipment, and run things like the PCFORMAN circuit.</h2>
                    </div>
                    <div className='row'>
                        <a className='partner-link' target='_blank' href='https://www.pcforman.com/' rel="noreferrer">Visit</a>
                    </div>
                </div>

                <div className='partner-container'>
                    <div className='row'>
                        <div className='row'>
                            <img className='partner-logo' src={PulsarLogo} alt='pulsar logo'></img>
                        </div>
                    </div>
                    <div className='blurb'>
                        <h2>Pulsar supplies our players and their support staff with high quality, and reliable mice and keyboards.</h2>
                    </div>
                    <div className='row'>
                        <a className='partner-link' target='_blank' href='https://www.pulsar.gg/' rel="noreferrer">Visit</a>
                    </div>
                </div>

            </div>
        );
    };
};

export default Partners;