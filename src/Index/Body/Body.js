import React, { Fragment } from 'react';

/* ------------------ */
/*     COMPONENTS     */
/* ------------------ */

import About from './About/About';
import Experiences from './Experiences/Experiences';
import Events from './Events/Events';

const body = () => {
    return (
        <Fragment>
            <About />
            <Experiences />
            <Events />
        </Fragment>
    );
}

export default body;