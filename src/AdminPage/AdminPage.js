import React, { Component, Fragment } from "react";

/* ------------------ */
/*     COMPONENTS     */
/* ------------------ */

import Header from "./Header/Header";
import Users from "./Users/Users";
import Messages from "./Messages/Messages";

export default class AdminPage extends Component {


    render() {
        return (
            <Fragment>
                <div className="container-fluid">
                    <Header />
                    <Users />
                    <Messages />
                </div>
            </Fragment>
        );
    }
}