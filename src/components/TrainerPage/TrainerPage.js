import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';


/* Componentes */
import Header from '../UsersHeader/UsersHeader';
import Navbar from './Navbar/Navbar';
import ControlPanel from './ControlPanel/ControlPanel';
import Messages from '../Comments/Messages';
import Footer from '../Footer/Footer';

export default class TrainerPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            redirect: false,
            userData: {},
        }

        this.logout = this.logout.bind(this);
        // this.checkHandler = this.checkHandler.bind(this)
    }

    componentWillMount() {
        if (sessionStorage.getItem("userData")) {

            const data = JSON.parse(sessionStorage.getItem("userData"))

            this.setState({
                userData: data.userData,
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

    // checkHandler = (e) => {
    //     alert(e.target.value)
    // }

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
                <ControlPanel exercices={this.state.exercices} />
                <Messages />
                <Footer />
            </Fragment>
        )
    }
}