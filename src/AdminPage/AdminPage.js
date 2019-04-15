import React, { Component, Fragment } from "react";
import { Redirect } from 'react-router-dom';

/* ------------------ */
/*     COMPONENTS     */
/* ------------------ */

import Header from "../GeneralComponents/Header-users/Header";
import Users from "./Users/Users";
import Messages from "./Messages/Messages";

export default class AdminPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            redirect: false,
            userData: {},
        }

        this.logout = this.logout.bind(this)
    }

    componentWillMount() {
        if (sessionStorage.getItem("userData")) {

            const data = JSON.parse(sessionStorage.getItem("userData"))

            this.setState({
                userData: data.userData,
                routine: data.table,
            })
        }
        else {
            this.setState({
                redirect: true
            })
        }
    }

    logout() {
        sessionStorage.setItem("userData", '');
        sessionStorage.clear();

        this.setState({
            redirect: true
        })
    }

    render() {

        // redirige a la pagina principal si deslogeamos
        if (this.state.redirect) {
            return <Redirect to="/" />
        }

        if (!this.state.userData.id) {
            return <Redirect to="/" />
        }

        return (
            <Fragment>
                <Header user={this.state.userData} logout={this.logout} />
                <Users />
                <Messages />
            </Fragment>
        );
    }
}