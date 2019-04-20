import React from 'react';

/* STYLES */
import './Routine.css';

const table = (props) => {

    return (
        <table className="table table-borderless table-dark table-hover table-striped routine">
            <thead>
                <tr>
                    <td colSpan="4" className="dark-green">Calentamiento</td>
                </tr>
                <tr>
                    <td colSpan="2" className="ligth-green">{props.routine[0].name}</td>
                    <td colSpan="2">{props.routine[0].time}</td>
                </tr>
                <tr>
                    <td colSpan="4" className="dark-green">Rutina de {props.routine.routine}</td>
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
                    <td>{props.routine[1].name}</td>
                    <td>{props.routine[1].series}</td>
                    <td>{props.routine[1].loops}</td>
                    <td>{props.routine[1].rest}</td>
                </tr>
                <tr>
                    <td>{props.routine[2].name}</td>
                    <td>{props.routine[2].series}</td>
                    <td>{props.routine[2].loops}</td>
                    <td>{props.routine[2].rest}</td>
                </tr>
                <tr>
                    <td>{props.routine[3].name}</td>
                    <td>{props.routine[3].series}</td>
                    <td>{props.routine[3].loops}</td>
                    <td>{props.routine[3].rest}</td>
                </tr>
                <tr>
                    <td>{props.routine[4].name}</td>
                    <td>{props.routine[4].series}</td>
                    <td>{props.routine[4].loops}</td>
                    <td>{props.routine[4].rest}</td>
                </tr>
                <tr>
                    <td>{props.routine[5].name}</td>
                    <td>{props.routine[5].series}</td>
                    <td>{props.routine[5].loops}</td>
                    <td>{props.routine[5].rest}</td>
                </tr>
                <tr>
                    <td>{props.routine[6].name}</td>
                    <td>{props.routine[6].series}</td>
                    <td>{props.routine[6].loops}</td>
                    <td>{props.routine[6].rest}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default table;