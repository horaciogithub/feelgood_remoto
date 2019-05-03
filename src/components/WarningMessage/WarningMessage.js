import React, { Component } from 'react';

/* Animaciones */
import WOW from 'wowjs';

/* Estilos */
import "./WarningMessage.css";

export default class WarningMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: true
        }
    }

    /* Montamos wow.js */
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }

    closeHandler = () => {
        this.setState({ visibility: false });
    }

    render() {
        let parent = '';

        if (this.state.visibility !== false) {
            parent = "col-3 p-5 pr-5 warning-container wow fadeInRight"
        } else {
            parent = "hidden";
        }

        return (
            <div className={parent}>
                <div className="warning-message">
                    <button className=" btn-close" onClick={this.closeHandler}><i className="fas fa-times"></i></button>
                    <p>El equipo de <span>FeelGood</span> le informa de que tiene <span>{this.props.warnings} {this.props.warnings === 1 ? "aviso " : "avisos "}</span>
                        por incumplimiento de las normas de la aplicación, le recordamos que al 3er aviso su cuenta será eliminada.</p>
                    <div className="triangle"></div>
                </div>
            </div>
        );
    }
}