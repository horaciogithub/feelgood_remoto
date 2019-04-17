import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

/* ------------------ */
/*     COMPONENTS     */
/* ------------------ */

import Header from '../UsersHeader/UsersHeader';
import Navbar from '../Navbar/Navbar';
import Body from './Body/Body';
import Messages from '../Comments/Messages';
import Footer from '../Footer/Footer';

export default class UserPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            redirect: false,
            userData: {},
            routine: {}
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

        let routine = '';

        if (!this.state.userData.id) {
            return <Redirect to="/" />
        }

        if (this.state.routine != null) {
            routine = <Body routine={this.state.routine} />
        }
        else {
            routine = <h1>No hay nadita</h1>
        }

        return (
            <Fragment>
                <Header user={this.state.userData} logout={this.logout} />
                <Navbar />
                {routine}
                <Messages />
                <Footer />
            </Fragment>
        )
    }
}