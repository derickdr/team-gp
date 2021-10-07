import React, { Component } from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Teams from './components/Teams';
import Creators from './components/Creators';
import Partners from './components/Partners';
import { Route, Switch, Redirect } from 'react-router-dom';

class Routes extends Component {
    render() {
        return (
            <>
                <NavBar />
                <Switch>
                    <Route exact path='/Home' component={HomePage} />
                    <Route exact path='/Teams' component={Teams} />
                    <Route exact path='/Creators' component={Creators} />
                    <Route exact path='/Partners' component={Partners} />
                </Switch>
            </>
        );
    };
}