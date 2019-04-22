import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

/* ------------------ */
/*     COMPONENTS     */
/* ------------------ */

import Header from '../UsersHeader/UsersHeader';
import Navbar from './Navbar/Navbar';
import Exercices from './ControlPanel/ControlPanel';
import Messages from '../Comments/Messages';
import Footer from '../Footer/Footer';

export default class TrainerPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            redirect: false,
            userData: {},
            routine: {},
        }

        this.logout = this.logout.bind(this);
        this.checkHandler = this.checkHandler.bind(this)
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

    logout = () => {
        sessionStorage.setItem("userData", '');
        sessionStorage.clear();

        this.setState({
            redirect: true
        })
    }

    checkHandler = (e) => {
        alert(e.target.value)
    }

    render() {

        // Devuelve home si deslogeamos
        if (this.state.redirect) {
            return <Redirect to="/" />
        }

        // Devuelve home si el usuario no existe
        if (!this.state.userData.id) {
            return <Redirect to="/" />
        }

        return (
            <Fragment>
                <Header user={this.state.userData} logout={this.logout} />
                <Navbar />
                <Exercices exercices={this.state.exercices} />
                <Messages />
                <Footer />
            </Fragment>
        )
    }
}