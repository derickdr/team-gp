import React from 'react';
import NavBar from './components/NavBar';
import Splash from './components/Splash';
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
                <Splash />
                <div className='content'>
                    <Switch>
                        <Route exact path='/home' component={HomePage} />
                        <Route exact path='/teams' component={Teams} />
                        <Route exact path='/creators' component={Creators} />
                        <Route exact path='/partners' component={Partners} />
                    </Switch>
                </div>
            </div>
        </Router>
	);
};

export default App;