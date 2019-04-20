import React, { Component } from 'react';

export default class Clients extends Component {
    constructor(props) {
        super(props)
        this.imcHandler = this.imcHandler.bind(this)
    }

    imcHandler = (wheigth, heigth) => {
        let userValues = [];
        let result = (wheigth / (Math.pow(heigth, 2))).toFixed(2);
        userValues[0] = result;

        if (result < 18.50) {

            userValues[1] = "Delgado/a";
        } else

            if (result < 24.99 && result > 18.50) {
                userValues[1] = "Peso ideal";
            } else

                if (result > 25.00) {
                    userValues[1] = "Sobrepeso";
                }

        return userValues;
    }

    render() {
        return (
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <td>Email</td>
                            <td>Sexo</td>
                            <td>Altura</td>
                            <td>Peso</td>
                            <td>Imc</td>
                            <td>Valor</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.clients.map(client =>
                            client.monday && client.tuesday && client.wednesday && client.thursday && client.friday && client.saturday && client.sunday ?
                                <tr key={client.id} className="active">
                                    <td>{client.email}</td>
                                    <td>{client.sex}</td>
                                    <td>{client.heigth}</td>
                                    <td>{client.wheigth}</td>
                                    <td>{this.imcHandler(client.wheigth, client.heigth)[0]}</td>
                                    <td>{this.imcHandler(client.wheigth, client.heigth)[1]}</td>
                                </tr> :
                                <tr key={client.id}>
                                    <td>{client.email}</td>
                                    <td>{client.sex}</td>
                                    <td>{client.heigth}</td>
                                    <td>{client.wheigth}</td>
                                    <td>{this.imcHandler(client.wheigth, client.heigth)[0]}</td>
                                    <td>{this.imcHandler(client.wheigth, client.heigth)[1]}</td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}