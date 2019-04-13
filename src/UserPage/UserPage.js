import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

/* ------------------ */
/*     COMPONENTS     */
/* ------------------ */

import Header from './Header/Header';
import Navbar from '../GeneralComponents/Navbar/Navbar';
import Body from './Body/Body';
import Footer from '../GeneralComponents/Footer/Footer';

export default class UserPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            redirect: false,
            userData: {},
            routine: {}
        }
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

    render() {

        //console.log(this.state.routine)

        if (!this.state.userData.id) {
            return <Redirect to="/" />
        }

        return (
            <Fragment>
                <Header user={this.state.userData} />
                <Navbar />
                <Body routine={this.state.routine} />
                <Footer />
            </Fragment>
        )
    }
}