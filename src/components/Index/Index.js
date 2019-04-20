import React, { Component, Fragment } from 'react';

/* ------------------ */
/*     COMPONENTS     */
/* ------------------ */

import Header from './Header/Header';
import Navbar from '../Navbar/Navbar';
import Body from './Body/Body';
import Footer from '../Footer/Footer';
import Register from './Register/Register';

export default class Index extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Register />
                <Navbar />
                <Body />
                <Footer />
            </Fragment>
        )
    }
}