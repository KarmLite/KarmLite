import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header'
import Footer from './layout/Footer'

export class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />

                <Footer />
            </Fragment>
        )
    }
}

export default App
