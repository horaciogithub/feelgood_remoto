import React, { Component } from 'react';

/* STYLES */
import './Routine.css';

export default class Routine extends Component {

    render() {
        console.log(this.props.routine)
        return (
            <div className="routine">
                <table className="table table-borderless table-hover table-striped">
                    <thead>
                        <tr className="header">
                            <td colSpan="4" className="dark-green">Rutina de {this.props.routine.routine}</td>
                        </tr>
                        <tr className="warm-up">
                            <td colSpan="2" className="ligth-green">{this.props.routine[0].name}</td>
                            <td colSpan="2">{this.props.routine[0].time}</td>
                        </tr>
                        <tr className="title">
                            <td>Ejercicio</td>
                            <td>Series</td>
                            <td>Repeticiones</td>
                            <td>Descanso</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.routine[1].name}</td>
                            <td>{this.props.routine[1].series}</td>
                            <td>{this.props.routine[1].loops}</td>
                            <td>{this.props.routine[1].rest}</td>
                        </tr>
                        <tr>
                            <td>{this.props.routine[2].name}</td>
                            <td>{this.props.routine[2].series}</td>
                            <td>{this.props.routine[2].loops}</td>
                            <td>{this.props.routine[2].rest}</td>
                        </tr>
                        <tr>
                            <td>{this.props.routine[3].name}</td>
                            <td>{this.props.routine[3].series}</td>
                            <td>{this.props.routine[3].loops}</td>
                            <td>{this.props.routine[3].rest}</td>
                        </tr>
                        <tr>
                            <td>{this.props.routine[4].name}</td>
                            <td>{this.props.routine[4].series}</td>
                            <td>{this.props.routine[4].loops}</td>
                            <td>{this.props.routine[4].rest}</td>
                        </tr>
                        <tr>
                            <td>{this.props.routine[5].name}</td>
                            <td>{this.props.routine[5].series}</td>
                            <td>{this.props.routine[5].loops}</td>
                            <td>{this.props.routine[5].rest}</td>
                        </tr>
                        <tr>
                            <td>{this.props.routine[6].name}</td>
                            <td>{this.props.routine[6].series}</td>
                            <td>{this.props.routine[6].loops}</td>
                            <td>{this.props.routine[6].rest}</td>
                        </tr>

                        {/* Ejercicios que pueden ser nulos */}
                        {
                            this.props.routine[7] !== null ?
                                <tr>
                                    <td>{this.props.routine[7].name}</td>
                                    <td>{this.props.routine[7].series}</td>
                                    <td>{this.props.routine[7].loops}</td>
                                    <td>{this.props.routine[7].rest}</td>
                                </tr> : ""
                        }

                        {
                            this.props.routine[8] !== null ?
                                <tr>
                                    <td>{this.props.routine[8].name}</td>
                                    <td>{this.props.routine[8].series}</td>
                                    <td>{this.props.routine[8].loops}</td>
                                    <td>{this.props.routine[8].rest}</td>
                                </tr> : ""
                        }

                        {
                            this.props.routine[9] !== null ?
                                <tr>
                                    <td>{this.props.routine[9].name}</td>
                                    <td>{this.props.routine[9].series}</td>
                                    <td>{this.props.routine[9].loops}</td>
                                    <td>{this.props.routine[9].rest}</td>
                                </tr> : ""
                        }

                        {
                            this.props.routine[10] !== null ?
                                <tr>
                                    <td>{this.props.routine[10].name}</td>
                                    <td>{this.props.routine[10].series}</td>
                                    <td>{this.props.routine[10].loops}</td>
                                    <td>{this.props.routine[10].rest}</td>
                                </tr> : ""
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
