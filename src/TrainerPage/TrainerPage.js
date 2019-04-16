import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import axios from "axios";

/* ------------------ */
/*     COMPONENTS     */
/* ------------------ */

import Header from '../GeneralComponents/Header-users/Header';
import Navbar from '../GeneralComponents/Navbar/Navbar';
import Clients from './Clients/Clients';
import Exercices from './ControlPanel/ControlPanel';
import Messages from '../GeneralComponents/Comments/Messages';
import Footer from '../GeneralComponents/Footer/Footer';

export default class TrainerPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            redirect: false,
            userData: {},
            routine: {},

            clients: [],
            exercices: [],
        }

        this.logout = this.logout.bind(this);
        this.checkHandler = this.checkHandler.bind(this)
    }

    componentDidMount() {

        // Carga los mensajes del foro
        axios.get("http://localhost:8000/api/clients")
            .then(response => {
                this.setState({
                    clients: response.data,
                });
            });

        // Carga las tablas de ejercicios 
        axios.get("http://localhost:8000/api/exercices")
            .then(response => {
                this.setState({
                    exercices: response.data,
                });
            });
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
        const clients = this.state.clients;

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
                <Navbar />
                <Clients clients={clients} check={this.checkHandler} />
                <Exercices exercices={this.state.exercices} />
                <Messages />
                <Footer />
            </Fragment>
        )
    }
}