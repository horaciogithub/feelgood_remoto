import React, { Component } from 'react';

export default class Clients extends Component {
    constructor(props) {
        super(props)
        this.imcHandler = this.imcHandler.bind(this)
    }

    imcHandler = (weigth, heigth) => {
        let userValues = [];
        let result = (weigth / (Math.pow(heigth, 2))).toFixed(2);
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
                <table className="tabla table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Sexo</th>
                            <th>Altura</th>
                            <th>Peso</th>
                            <th>Imc</th>
                            <th>Valor</th>
                            <th>Fin rutina</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.clients.map(client =>
                            client.monday && client.tuesday && client.wednesday && client.thursday && client.friday && client.saturday && client.sunday ?
                                <tr key={client.id} className="active">
                                    <td>{client.email}</td>
                                    <td>{client.gender}</td>
                                    <td>{client.heigth}</td>
                                    <td>{client.weigth}</td>
                                    <td>{this.imcHandler(client.weigth, client.heigth)[0]}</td>
                                    <td>{this.imcHandler(client.weigth, client.heigth)[1]}</td>
                                    <td>{client.exerc_end}</td>
                                </tr> :
                                <tr key={client.id}>
                                    <td>{client.email}</td>
                                    <td>{client.gender}</td>
                                    <td>{client.heigth}</td>
                                    <td>{client.weigth}</td>
                                    <td>{this.imcHandler(client.weigth, client.heigth)[0]}</td>
                                    <td>{this.imcHandler(client.weigth, client.heigth)[1]}</td>
                                    <td>{client.exerc_end}</td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}