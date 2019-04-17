import React from 'react';
// import { array } from 'prop-types';

const cPanel = (props) => {
    //console.log(props.exercices)

    // const exercicesType = (exercices) => {
    //     let options = [];


    //     console.log(exercices)
    // }

    // exercicesType(props.exercices)

    return (
        <div>
            <select>
                {props.exercices.map(exercice =>
                    // <option>{exercicesType(exercice.type)}</option>
                    <option>{exercice.type}</option>
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