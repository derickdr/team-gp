import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Teams from './components/Teams';
import Creators from './components/Creators';
import Partners from './components/Partners';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './styles/App.scss';

function App() {
	return (
        <Router>
            <div className='app'>
                <NavBar />
                <div className='content'>
                    <Switch>
                        <Route exact path='/home'>
                            <HomePage />
                        </Route>
                        <Route exact path='/teams'>
                            <Teams />
                        </Route>
                        <Route exact path='/creators'>
                            <Creators />
                        </Route>
                        <Route exact path='/partners'>
                            <Partners />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
	);
};

export default App;