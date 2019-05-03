import React, { Component } from 'react';

/* Estilos */
import "./WarningMessage.css";

export default class WarningMessage extends Component {
    render() {
        return (
            <div className="col-3 p-5 pr-5 warning-container">
                <div className="warning-message">
                    <button className=" btn-close"><i class="fas fa-times"></i></button>
                    <p>El equio de FeelGood le avisa de que tiene {this.props.warnings} {this.props.warnings === 1 ? "aviso" : "avisos"} por incumplimiento de las normas de la aplicación, le recordamos que al 3er aviso su cuenta será eliminada.</p>
                    <div className="triangle"></div>
                </div>
            </div>
        );
    }
}