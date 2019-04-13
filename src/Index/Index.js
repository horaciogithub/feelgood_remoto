import React, { Fragment } from 'react';

/* ------------------ */
/*     COMPONENTS     */
/* ------------------ */

import Header from '../GeneralComponents/Header/Header';
import Navbar from '../GeneralComponents/Navbar/Navbar';
import Body from '../GeneralComponents/IndexBody/Body';
import Footer from '../GeneralComponents/Footer/Footer';
import Register from '../GeneralComponents/Header/WrapperRegister';

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
