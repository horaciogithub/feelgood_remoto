import React from 'react';

const clients = (props) => {
    console.log(props.clients)
    return (
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <td>Email</td>
                        <td>Sexo</td>
                        <td>Altura</td>
                        <td>Peso</td>
                        <td>Imc</td>
                    </tr>
                </thead>
                <tbody>
                    {props.clients.map(client =>
                        <tr key={client.id}>
                            <td>{client.email}</td>
                            <td>{client.sex}</td>
                            <td>{client.heigth}</td>
                            <td>{client.wheigth}</td>
                            <td>{(client.wheigth / (Math.pow(client.heigth, 2))).toFixed(2)}</td>
                            <td><input type="checkbox" value={client.id} onClick={props.check}></input></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default clients;