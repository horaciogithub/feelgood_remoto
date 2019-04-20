import React, { Component } from 'react';

/* STYLES */
import './Routine.css';

export default class Routine extends Component {

    render() {
        return (
            <table className="table table-borderless table-dark table-hover table-striped routine">
                <thead>
                    <tr>
                        <td colSpan="4" className="dark-green">Calentamiento</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="ligth-green">{this.props.routine[0].name}</td>
                        <td colSpan="2">{this.props.routine[0].time}</td>
                    </tr>
                    <tr>
                        <td colSpan="4" className="dark-green">Rutina de {this.props.routine.routine}</td>
                    </tr>
                    <tr className="ligth-green">
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
                </tbody>
            </table>
        );
    }
}
