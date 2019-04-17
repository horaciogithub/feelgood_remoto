import React, { Fragment } from 'react';

/* ------------------ */
/*     COMPONENTS     */
/* ------------------ */

import Header from './Header/Header';
import Navbar from '../Navbar/Navbar';
import Body from './Body/Body';
import Footer from '../Footer/Footer';
import Register from './Header/WrapperRegister';

const index = (props) => {

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

export default index;
