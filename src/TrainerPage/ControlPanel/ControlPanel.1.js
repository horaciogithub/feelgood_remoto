import React from 'react';
import axios from "axios";
// import { array } from 'prop-types';

const cPanel = (props) => {

    let setOptions = (props) => {
        let options = [];

        if (props.exercices[0]) {
            for (let i = 0; i < props.exercices.length; i++) {
                options[i] = props.exercices[i].type;

            }
        }
        return [...new Set(options)];
    }

    let tables = () => {
        axios.get("http://localhost:8000/api/clients")
            .then(response => {
                console.log(response)
            });
    }

    return (
        <div>
            <select onChange={tables()}>
                <option title="Tipo">Tipo: </option>
                {setOptions(props).map(exercice =>
                    <option key={exercice}>{exercice}</option>
                )}
            </select>

            {/* <select>
                {props.exercices.map(exercice =>
                    <option>{exercicesType(exercice.warm_up.name)}</option>
                )}
            </select> */}
        </div>
    );
}

export default cPanel;