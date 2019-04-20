import React, { Component, Fragment } from 'react';

/* ------------------ */
/*     COMPONENTS     */
/* ------------------ */

import About from './About/About';
import Experiences from './Experiences/Experiences';
import Events from './Events/Events';

export default class Body extends Component {
    render() {
        return (
            <Fragment>
                <About />
                <Experiences />
                <Events />
            </Fragment>
        );
    }
}
