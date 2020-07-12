import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import 'KarmLite/frontend/templates/frontend/App.css'
import {login} from "./components/login"
import {signup} from "./components/signup"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


import Header from './layout/Header'
import Footer from './layout/Footer'

export class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Router>
                    <div className="App-Header">
                    <Switch>
                        <Route path="/login" component={login} exact />
                        <Route path="/signup" component={signup} exact />
                    </Switch>                        
                </div>
                </Router>

                <Footer />
            </Fragment>
        )
    }
}

export default App
