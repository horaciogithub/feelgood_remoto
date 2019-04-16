import React from 'react';

const cPanel = (props) => {
    console.log(props.exercices)


    return (
        <div>
            <select>
                {props.exercices.map(exercice =>
                    <option>{exercice.type}</option>
                )}
            </select>
        </div>
    );
}

export default cPanel;